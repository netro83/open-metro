var
        bg,
        winText,
        winText2,
        winPoint,
        new_game,
        winimage;

Game.Outro = function (game) {
    this.game = game;
};

Game.Outro.prototype = {
    create: function () {
        var
                result = window.localStorage.getItem("win"),
                point = window.localStorage.getItem("point");


        /*
         * init storage
         */
        (window.localStorage.getItem("maxpoint") == undefined ? window.localStorage.setItem("maxpoint", 0) : '');

        bootbox.prompt("Your name (we store your points):", function (result) {

            /*
             * 
             * POST toplist
             */
            $.ajax({
                url: '', // your toplist url
                type: 'POST',
                data: {'name': result, 'point': Math.round(window.localStorage.getItem('points')) },
                success: function (response) {
                    var
                            resp_image1, resp_image2, resp_image3, resp_image4;

                    response = JSON.parse(response);


                }
            })

        });

        /*
         * 
         * add text
         */
        this.messageText = this.game.add.bitmapText(Game.w / 2, 10, 'gem', '', 16);
        this.messageText.anchor.x = 0.5;
        this.messageText.maxWidth = Game.w - 200;
        this.messageText.align = 'center';
        this.messageText.tint = 0xE53F10;
//        this.messageText.setText("A játék fejlesztői állapotú. Online toplista, állomások vagy égő szerelvények a folyamatos fejlesztésekkel fognak érkezni. Ha támogatni szeretnéd a projektet, értékeld az áruház oldalán.");
        this.messageText.setText("The game in development. Online top-ups, stations or burning cars will be coming up with ongoing improvements. To support a project, please evaluate it on the store page.");

        this.winText2 = this.game.add.bitmapText(Game.w / 2, Game.h / 2 - 60, 'gem', '', 50);
        this.winText2.anchor.setTo(0.5, 0.5);
        this.winText2.align = 'center';
        this.winText2.tint = 0xffffff;
        this.winText2.setText("YOUR POINTS");

        this.winPoint = this.game.add.bitmapText(Game.w / 2, Game.h / 2 - 40, 'gem', '', 100);
        this.winPoint.anchor.x = 0.5;
        this.winPoint.align = 'center';
        this.winPoint.tint = 0xE53F10;
        this.winPoint.setText((window.localStorage.getItem('points') !== null ? Math.round(window.localStorage.getItem('points')) : ""));

        this.winMaxPoint = this.game.add.bitmapText(Game.w / 2, Game.h / 2 + 60, 'gem', '', 25);
        this.winMaxPoint.anchor.x = 0.5;
        this.winMaxPoint.align = 'center';
        this.winMaxPoint.tint = 0xffffff;
        this.winMaxPoint.setText("YOUR TOP: " + (window.localStorage.getItem("maxpoint") !== undefined ? window.localStorage.getItem("maxpoint") : 0));

        this.newGame = this.game.add.sprite(Game.w / 2, Game.h - 20, "start");
        this.newGame.anchor.setTo(0.5, 1);
        this.newGame.inputEnabled = true;
        this.newGame.events.onInputDown.add(function () {

            self.game.paused = false;
            window.localStorage.setItem("points", "")

            self.game.state.start('Menu');

        }, this);


    }

};
