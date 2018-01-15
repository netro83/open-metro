Game.Toplist = function (game) {
    this.game = game;
};

Game.Toplist.prototype = {
    create: function () {
        var
                self = this,
                result = window.localStorage.getItem("win"),
                point = window.localStorage.getItem("point");

        /*
         * 
         * add text
         */
        this.toplist1 = this.game.add.bitmapText(Game.w / 2, 10, 'gem', 'Loading...', 25);
        this.toplist1.anchor.x = 0.5;
        this.toplist1.align = 'center';
        this.toplist1.tint = 0xffffff;
        
        this.toplist2 = this.game.add.bitmapText(Game.w / 2, 30, 'gem', '', 25);
        this.toplist2.anchor.x = 0.5;
        this.toplist2.align = 'center';
        this.toplist2.tint = 0xffffff;
        
        this.toplist3 = this.game.add.bitmapText(Game.w / 2, 50, 'gem', '', 25);
        this.toplist3.anchor.x = 0.5;
        this.toplist3.align = 'center';
        this.toplist3.tint = 0xffffff;
        
        this.toplist4 = this.game.add.bitmapText(Game.w / 2, 70, 'gem', '', 25);
        this.toplist4.anchor.x = 0.5;
        this.toplist4.align = 'center';
        this.toplist4.tint = 0xffffff;
        
        this.toplist5 = this.game.add.bitmapText(Game.w / 2, 90, 'gem', '', 25);
        this.toplist5.anchor.x = 0.5;
        this.toplist5.align = 'center';
        this.toplist5.tint = 0xffffff;
        
        this.toplist6 = this.game.add.bitmapText(Game.w / 2, 110, 'gem', '', 25);
        this.toplist6.anchor.x = 0.5;
        this.toplist6.align = 'center';
        this.toplist6.tint = 0xffffff;
        

        /*
         * 
         * POST toplist
         */
        $.ajax({
            url: '', // your toplist url
            type: 'POST',
            data: {},
            success: function (response) {
                var
                        resp_image1, resp_image2, resp_image3, resp_image4;

                response = JSON.parse(response);
                
                self.toplist1.text = '1 ' + response[0].name + ' - ' + response[0].point;
                self.toplist2.text = '2 ' + response[1].name + ' - ' + response[1].point;
                self.toplist3.text = '3 ' + response[2].name + ' - ' + response[2].point;
                self.toplist4.text = '4 ' + response[3].name + ' - ' + response[3].point;
                self.toplist5.text = '5 ' + response[4].name + ' - ' + response[4].point;
                self.toplist6.text = '6 ' + response[5].name + ' - ' + response[5].point;

            }
        })



        this.newGame = this.game.add.sprite(Game.w / 2, Game.h - 20, "back");
        this.newGame.anchor.setTo(0.5, 1);
        this.newGame.inputEnabled = true;
        this.newGame.events.onInputDown.add(function () {

            self.game.paused = false;
            window.localStorage.setItem("points", "")

            self.game.state.start('Menu');

        }, this);


    }

};
