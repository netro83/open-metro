var video;
var sprite;
var mute = true;

/*global Game*/
Game.Menu = function (game) {
    this.game = game;
};
Game.Menu.prototype = {
    preload: function () {
        this.game.load.video('video', 'assets/video/metro.mp4');
        /*
         * 
         * add bg_sound music
         */
        if (this.music !== undefined)
            this.music.destroy();
        
        this.game.sound.volume = 0.5;
        this.music = this.game.add.audio('bg_sound');
        this.music.loop = true;
        this.music.volume = 0.4;

        if (!this.music.isPlaying)
            this.music.play();
    
    },
    create: function () {
        var
                self = this,
                setupFlag = 0;

        /*
         * 
         * add video
         */
        this.video = this.game.add.video('video');
        this.video.width = Game.w;
        this.video.height = Game.h;

        if (document.visibilityState == 'visible')
            this.video.play();

        this.video.unlock();
        this.video.loop = true;

        this.video.addToWorld(0, 0, 0, 0, 2, 2);

        /*
         * 
         * add background
         */
        this.bg = this.game.add.image(0, 0, "menu_bg");
        this.bg.alpha = .70;
        this.bg.blendMode = Phaser.blendModes.MULTIPLY;

        this.bg.anchor.setTo(0.5, 0.5);
        this.bg.x = Game.w / 2;
        this.bg.y = Game.h / 2;



//        var width = bg.width / (bg.height / Game.h);
//        bg.width = width
//        bg.height = Game.h;
//        bg.x = -(bg.width - Game.w) / 2;
//        bg.y = -(bg.height - Game.h) / 2;
//
//        bg.align = "center";
//        bg.alpha = 1;

        /*
         * 
         * add setup popup
         */


        /*
         * 
         * add start
         */
        this.start = this.game.add.image(0, 0, "start");

        this.start.anchor.setTo(0.5, 0.5);
        this.start.x = Game.w / 2;
        this.start.y = Game.h / 2;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(function () {

            this.music.stop();
            this.music.destroy();
            self.game.state.start('Play');

        }, this);

        /*
         *
         * add logo
         */
        this.menu_logo = this.game.add.image(0, 0, "menu_logo");

        this.menu_logo.anchor.setTo(0.5, 0);
        this.menu_logo.x = Game.w / 2;
        this.menu_logo.y = 10;

        /*
         *
         * add mute
         */
        this.mute = this.game.add.image(Game.w - 10, 20, "mute");
        this.mute.anchor.setTo(1, 0);
        this.mute.inputEnabled = true;
        this.mute.events.onInputDown.add(function () {

            if (!mute) {

                self.mute.loadTexture('mute', 0);
                this.game.sound.volume = 1;

            } else {

                self.mute.loadTexture('mute_e', 0);
                this.game.sound.volume = 0;

            }

            mute = !mute;

        }, this);
        
        /*
         *
         * add close
         */
        this.close = this.game.add.image(10, 20, "close");
        this.close.anchor.setTo(0, 0);
        this.close.inputEnabled = true;
        this.close.events.onInputDown.add(function () {

           navigator.app.exitApp();

        }, this);

        /*
         * 
         * add toplist
         */
        this.toplist = this.game.add.image(0, 0, "toplists");

        this.toplist.anchor.setTo(0.5, 0.5);
        this.toplist.x = Game.w / 2;
        this.toplist.y = Game.h / 2 + 50;
        this.toplist.inputEnabled = true;
        this.toplist.events.onInputDown.add(function () {

            self.game.state.start('Toplist');

        }, this);

    },
    update: function () {
        //Click to Start
//        if (this.game.input.activePointer.isDown) {
//            this.game.state.start('Play');
//        }
    },
    setupWindow: function () {
        var
                self = this;

        /*
         * 
         * add bg and animate this
         */
        setup_bg = this.game.add.sprite(0, 0, 'platform_orange');
        setup_bg.y = 0;
        setup_bg.width = Game.w * 2;
        setup_bg.alpha = 1;

        /*
         * 
         * add texts
         */
        text1 = this.game.add.bitmapText(20, 20, 'gem', 'NEHÉZSÉG: ', 30);
        text2 = this.game.add.bitmapText(200, 20, 'gem', 'KÖNNYŰ', 30);
        text3 = this.game.add.bitmapText(400, 20, 'gem', 'KÖZEPES', 30);
        text4 = this.game.add.bitmapText(600, 20, 'gem', 'NEHÉZ', 30);
        text5 = this.game.add.bitmapText(Game.w - 100, 20, 'gem', 'MÉGSE', 30);

        /*
         * 
         * active button
         */
        switch (window.localStorage.getItem("n")) {

            case("1100"):
                text2.alpha = 0.5;
                break;

            case("850"):
                text3.alpha = 0.5;
                break;

            case("550"):
                text4.alpha = 0.5;
                break;

        }

        /*
         * 
         * button events
         */
        text2.inputEnabled = true;
        text2.events.onInputDown.add(function () {

            window.localStorage.setItem("n", "1100")
            self.setupDestroyWindow()

        }, this)

        text3.inputEnabled = true;
        text3.events.onInputDown.add(function () {

            window.localStorage.setItem("n", "850")
            self.setupDestroyWindow()

        }, this)

        text4.inputEnabled = true;
        text4.events.onInputDown.add(function () {

            window.localStorage.setItem("n", "550")
            self.setupDestroyWindow()

        }, this)

        text5.inputEnabled = true;
        text5.events.onInputDown.add(function () {

            self.setupDestroyWindow()

        }, this)

    },
    setupDestroyWindow: function () {
        var
                self = this;

        setup_bg.destroy()
        text1.destroy()
        text2.destroy()
        text3.destroy()
        text4.destroy()
        text5.destroy()

    }
};
