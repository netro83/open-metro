var
        Game = {
            w: window.innerWidth,
            h: window.innerHeight
        },
        preloading,
        MainVariableObject;


Game.Boot = function (game) {
    this.game = game;
    this.MainVariableObject = '';
};

Game.Boot.prototype = {
    preload: function () {
        this.game.scale.forceOrientation(true, false);
        this.game.stage.smoothed = true;

        //Automatically Scale to fit available screen
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//        this.game.scale.setGameSize(Game.w, Game.h)
////        this.game.scale.maxHeight = window.innerHeight;
////        this.game.scale.maxWidth = window.innerHeight * (Game.w / Game.h);
//
//        this.game.stage.scale.pageAlignHorizontally = true;
//        this.game.stage.scale.pageAlignVeritcally = true;
//        this.game.scale.setScreenSize(true);
        this.game.renderer.renderSession.roundPixels = true
    },
    create: function () {

        this.game.stage.disableVisibilityChange = false;
        this.game.state.start('Load');
    }
};

Game.Load = function (game) {
    /*
     * 
     * load game data file
     */
    $.ajax({
        url: "data/game.json",
        dataType: "JSON"
    }).done(function (response) {

        /*
         * set MainVariableObject
         */
        MainVariableObject = response;
        this.MainVariableObject = response;

        this.game = game;

    });

};

Game.Load.prototype = {
    preload: function () {
        var
                self = this;

        this.preload = self.game.add.text(Game.w / 2, Game.h / 2, 'Loading...', {fill: '#ffffff', fontSize: 12});
        this.preload.anchor.setTo(0.5, 0.5);
        this.preload.tint = 0xffffff;
        this.game.world.bringToTop(this.preload);

        this.game.load.onLoadStart.add(self.loadStart, this);
        this.game.load.onFileComplete.add(self.fileComplete, this);
        this.game.load.onLoadComplete.add(self.loadComplete, this);


        this.startPreloader();

    },
    create: function () {
        var
                self = this;

        this.splashLogo = self.game.add.sprite(0, 0, 'splash');
        this.splashLogo.alpha = 0;
        this.game.add.tween(self.splashLogo).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, function () {
            return true
        }, 0, 0, function () {
            return true
        });

        this.preload.setText("");

        this.splashLogo.anchor.setTo(0.5, 0.5);
        this.splashLogo.x = Game.w / 2;
        this.splashLogo.y = Game.h / 2;

        setTimeout(function () {

            self.game.state.start('Menu');
//            self.game.state.start('Outro');

        }, 4000)


    },
    startPreloader() {

        /*
         * font loader from json
         */
//console.log(MainVariableObject)
        for (var i in MainVariableObject.fontFiles) {

            game.load.bitmapFont(MainVariableObject.fontFiles[i].name, MainVariableObject.fontFiles[i].imageURL, MainVariableObject.fontFiles[i].fontURL);

        }

        /*
         * image loader from json
         */
        for (var i in MainVariableObject.imageFiles) {

            game.load.image(MainVariableObject.imageFiles[i].name, MainVariableObject.imageFiles[i].imageURL, 0, 0);

        }

        /*
         * sound loader from json
         */
        for (var i in MainVariableObject.soundFiles) {

            game.load.audio(MainVariableObject.soundFiles[i].name, MainVariableObject.soundFiles[i].soundURL, 0, 0);

        }

        game.load.start();

    },
    loadComplete: function () {
        var
                self = this;



    },
    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {

        this.preload.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

    },
    loadStart: function () {

        this.preload.setText("Loading.2..");

    }
};
