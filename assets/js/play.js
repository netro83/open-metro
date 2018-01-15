var
        speed = 0,
        points = 0,
        transmission = 0,
        transmissionState = 1,
        doors = false,
        actualStation = 0,
        actualStationName = '',
        actualDistance = 0,
        trainInTheStation = false,
        passengers = 0,
        passengersDay = 1,
        passengersUp = 0,
        passengersDown = 0,
        stationArray = [],
        timeTable = [
            {
                'startTime': '0702'
            }
        ],
        speedLimits = [
            {
                'id': '1',
                'limit': 30,
                'start': 0,
                'end': 2000
            },
            {
                'id': '2',
                'limit': 40,
                'start': 2001,
                'end': 8000
            },
            {
                'id': '3',
                'limit': 30,
                'start': 8001,
                'end': 9200
            },
            {
                'id': '4',
                'limit': 45,
                'start': 9201,
                'end': 10299
            },
            {
                'id': '5',
                'limit': 30,
                'start': 10300,
                'end': 19999
            },
            {
                'id': '6',
                'limit': 40,
                'start': 20000,
                'end': 22200
            },
            {
                'id': '7',
                'limit': 45,
                'start': 22201,
                'end': 32999
            },
            {
                'id': '8',
                'limit': 20,
                'start': 33000,
                'end': 34499
            },
            {
                'id': '9',
                'limit': 40,
                'start': 34500,
                'end': 36999
            },
            {
                'id': '10',
                'limit': 45,
                'start': 37000,
                'end': 58999
            },
            {
                'id': '11',
                'limit': 40,
                'start': 59000,
                'end': 184000
            },
            {
                'id': '12',
                'limit': 45,
                'start': 60500,
                'end': 950000
            }
        ],
        speedLimitsActualState = 0,
        stationTable = [
            {
                'stationName': 'Újpest-Központ',
                'startTime': '1',
                'length': '0',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': 'mas_ujpest_veg',
                'sound': 'ujpest',
                'sound_k': 'ujpest_varoskapu_k'
            },
            {
                'stationName': 'Újpest-Városkapu',
                'startTime': '1',
                'length': '8000',
                'stationImage': 'sta_ujpest__2',
                'stationMask': null,
                'sound': 'ujpest_varoskapu',
                'sound_k': 'gyongyosi_k'
            },
            {
                'stationName': 'Gyöngyösi utca',
                'startTime': '3',
                'length': '20000',
                'stationImage': 'sta_gyongyosi',
                'stationMask': 'mas_gyongyosi',
                'sound': 'gyongyosi',
                'sound_k': 'forgach_k'
            },
            {
                'stationName': 'Forgách utca',
                'startTime': '2',
                'length': '33000',
                'stationImage': 'sta_forgach',
                'stationMask': 'mas_forgach',
                'sound': 'forgach',
                'sound_k': 'arpad_k'
            },
            {
                'stationName': 'Árpád híd',
                'startTime': '2',
                'length': '46000',
                'stationImage': 'sta_arpad',
                'stationMask': null,
                'sound': 'arpad',
                'sound_k': 'dozsa_k'
            },
            {
                'stationName': 'Dózsa György út',
                'startTime': '2',
                'length': '59000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null,
                'sound': 'dozsa',
                'sound_k': 'lehel_k'
            },
            {
                'stationName': 'Lehel tér',
                'startTime': '2',
                'length': '72000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null,
                'sound': 'lehel',
                'sound_k': 'nyugati_k'
            },
            {
                'stationName': 'Nyugati pályaudvar',
                'startTime': '2',
                'length': '85000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null,
                'sound': 'nyugati',
                'sound_k': ''
            },
            {
                'stationName': 'Arany János utca',
                'startTime': '1',
                'length': '90000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Deák Ferenc tér',
                'startTime': '2',
                'length': '103000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Ferenciek tere',
                'startTime': '1',
                'length': '108000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Kálvin tér',
                'startTime': '1',
                'length': '113000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Corvin-negyed',
                'startTime': '2',
                'length': '126000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Klinikák',
                'startTime': '1',
                'length': '131000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Nagyvárad tér',
                'startTime': '2',
                'length': '143000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Népliget',
                'startTime': '2',
                'length': '155000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Ecseri út',
                'startTime': '2',
                'length': '168000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Pöttyös utca',
                'startTime': '1',
                'length': '173000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Határ út',
                'startTime': '1',
                'length': '178000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            },
            {
                'stationName': 'Kőbánya-Kispest',
                'startTime': '3',
                'length': '184000',
                'stationImage': 'sta_ujpest_veg',
                'stationMask': null
            }

        ],
        timer,
        h, m, s;

Game.Play = function (game) {
    this.game = game;
};
Game.Play.prototype = {
    preload: function () {
        this.scale.pageAlignHorizontally = true;

        speed = 0;
        points = 0;
        transmission = 0;
        transmissionState = 1;
        doors = false;
        actualStation = 0;
        actualStationName = '';
        actualDistance = 0;
        trainInTheStation = false;
        passengers = 0;
        passengersDay = 1;
        passengersUp = 0;
        passengersDown = 0;

        /*
         * 
         * add train music
         */
        this.train = this.game.add.audio('train');
        this.train.loop = true;
        this.train.volume = 0.2;

        this.train.play();
//
//        /*
//         * 
//         * add station music
//         */
//        this.station = this.game.add.audio('station');
//        this.station.loop = true;
//        this.station.volume = 0.0;
//
//        this.station.play();

    },
    create: function () {
        var
                self = this;

        /*
         * 
         * debug fps setup
         */
        this.game.time.advancedTiming = true;

        /*
         * init physics system
         */
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 200000, 435);
        /*
         * init game background
         */
        self.alphaAnimateBg('bg__table');
        /*
         * init room
         */
        self.room(1)

        /*
         * add fader grfx
         */
        self.faderGRFX();

        /*
         * init mask layer
         */
        self.maskLayer();

        /*
         * add CRT
         */
        self.addCRT();

        /*
         * init ui
         */
        self.ui();


        /* --------------------------------------------------------- */

        /*
         * start timer
         */
        self.timingUI(parseInt((stationTable[actualStation].startTime)));

    },
    update: function () {
        var
                self = this;

        /*
         * car move
         * -----------------------------
         */
        self.carMove();

        /*
         * calculate points
         * -----------------------------
         */
        self.points();

        /*
         * calculate stations
         * -----------------------------
         */
        self.stations();

        /*
         * speed limits
         * -----------------------------
         */
        self.speedLimit();

        /*
         * train sounds
         * -----------------------------
         */
        self.carSound();

        /*
         * show doors
         * -----------------------------
         */
//        self.userUIDoors.text = 'ajtók' + (doors ? ' nyitva' : ' zárva')

        /*
         * show speed
         * -----------------------------
         */
//        this.userSpeed.text = 'speed ' + Math.round(self.metroCar.body.velocity.x / 15) + ' km/h';
        this.userSpeedLCD.text = Math.round(self.metroCar.body.velocity.x / 15);

        /*
         * show trans state
         * -----------------------------
         */
        this.userUITrans.text = transmission;

        /*
         * show points
         * -----------------------------
         */
        this.userUIPoint.text = 'POINTS: ' + Math.round(points);

        /*
         * show speed limits
         * -----------------------------
         */
        this.userUISpeedLimitText.text = speedLimits[speedLimitsActualState].limit;

        /*
         * show points
         * -----------------------------
         */
        this.userUIStation.text = 'NEXT STATION: ' + Math.round(actualDistance) + ' dis - ' + actualStationName;


        /*
         * show passengers and distance
         * -----------------------------
         */
        this.userUIPassengers.text = 'PASSENGERS: ' + passengers + ' ( UP - ' + passengersUp + ' / DOWN -' + passengersDown + ' ) - DISTANCE: ' + Math.round(self.metroCar.x - 300);


    },
    render: function () {
        var
                self = this;

        /*
         * elapsed time
         * -----------------------------
         */
        this.userUITime.text = Math.round(this.timer.duration.toFixed(0) / 1000) + ' s';

//        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");

//        game.debug.bodyInfo(self.metroCar, 32, 62);
//        game.debug.body(self.metroCar);
//        game.debug.body(self.stationUP_1);
    },
    /*
     * Room function
     * ---------------------------------------
     * 
     * @param {string} room
     * @returns {}
     */
    room: function (room) {
        var
                self = this;

        /*
         * add player
         */
        self.controlPlayer(0, 0);


    },
    controlPlayer: function (position, playerNumber) {
        var
                self = this;

        this.metroCar = self.game.add.sprite(300, 323, 'icon__car');

        /*
         * door 4
         */
        this.metroCar.addChildAt(self.game.make.sprite(-407, -41, 'icon__door_l'), 0);
        this.metroCar.addChildAt(self.game.make.sprite(-385, -41, 'icon__door_r'), 0);

        /*
         * car mask
         */
        this.metroCar.addChildAt(self.game.make.sprite(-2362, -64, 'icon__car_d'), 0);

        /*
         * car mask
         */
        this.metroCar.addChildAt(self.game.make.sprite(-1488, -64, 'icon__car'), 0);
        this.metroCar.children[1].alpha = 0;

        /*
         * door 1
         */
        this.metroCar.addChildAt(self.game.make.sprite(64, -41, 'icon__door_l'), 0);
        this.metroCar.addChildAt(self.game.make.sprite(86, -41, 'icon__door_r'), 0);
        /*
         * door 2
         */
        this.metroCar.addChildAt(self.game.make.sprite(-93, -41, 'icon__door_l'), 0);
        this.metroCar.addChildAt(self.game.make.sprite(-71, -41, 'icon__door_r'), 0);
        /*
         * door 3
         */
        this.metroCar.addChildAt(self.game.make.sprite(-250, -41, 'icon__door_l'), 0);
        this.metroCar.addChildAt(self.game.make.sprite(-228, -41, 'icon__door_r'), 0);
        /*
         * peoples
         */
//        this.metroCar.addChildAt(self.game.make.sprite(-2362, -64, 'peoples_1'), 0);

        this.metroCar.width = 1653;
        this.metroCar.height = 128;
        this.metroCar.anchor.setTo(0.9, 0.5);
        this.metroCar.fixedToCamera = false;
        this.game.physics.arcade.enable(self.metroCar);
        this.game.world.bringToTop(this.metroCar);
        this.metroCar.body.setSize(20, 128, 1633, 0);
        this.game.camera.follow(self.metroCar, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    },
    controllCamera: function (field) {
        var
                self = this;

//        this.game.camera.follow(self.playerOne, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    },
    /*
     * Add room background fader
     * ---------------------------------------
     * 
     * @param {string} bgImage
     * @returns {undefined}
     */
    faderGRFX: function () {
        var
                self = this;

        this.others = {};

        for (var i in stationTable) {
            var
                    k = (parseInt(i) == stationTable.length - 1 ? parseInt(i) : parseInt(i) + 1);

            this.others['stationUP_' + i + '_fader'] = self.game.add.sprite(parseInt(stationTable[i].length) + 1659, 242, 'metro__bg_full_2');
            this.others['stationUP_' + i + '_fader'].width = (parseInt((stationTable[k].length)) - parseInt((stationTable[i].length))) - 1659;
            this.others['stationUP_' + i + '_fader'].alpha = 0.5;
            this.game.world.bringToTop(self.others['stationUP_' + i + '_fader']);

        }

    },
    alphaAnimateBg: function (bgImage) {
        var
                self = this,
                imageHolder;

        this.container = {};

        /*
         * add image
         * -----------------------------
         */
        if (this.imageHolder !== undefined)
            this.imageHolder.kill();

        /*
         * add map
         */
        this.imageHolder = self.game.add.tileSprite(0, 0, 128000, 435, bgImage);


        for (var i in stationTable) {

            /*
             * add stations
             */
            this.container['stationUP_' + i] = self.game.add.sprite(0, 0, stationTable[i].stationImage);
            this.container['stationUP_' + i].x = parseInt(stationTable[i].length);
            this.container['stationUP_' + i].y = 242;
            this.container['stationUP_' + i].stationName = stationTable[i].stationName;
            this.game.physics.arcade.enable(self.container['stationUP_' + i]);
            this.container['stationUP_' + i].body.setSize(100, 435, 1559, 0);
            this.container['stationUP_' + i].body.immovable = true;
            this.container['stationUP_' + i].body.checkCollision.left = false;
            this.container['stationUP_' + i].body.checkCollision.right = false;
            this.game.world.bringToTop(self.container['stationUP_' + i]);

            /*
             * add peoples
             */
            this.container['peoples_' + i] = self.game.add.sprite(0, 0, 'peoples_1');
            this.container['peoples_' + i].x = parseInt(stationTable[i].length);
            this.container['peoples_' + i].y = 242;

            /*
             * add station names to array
             */
            stationArray[i] = 'self.container.stationUP_' + i;

        }

        /*
         * user ui header
         */
        this.userUIHeader = self.game.add.sprite(0, 0, 'header');
        this.userUIHeader.width = Game.w;
        this.userUIHeader.fixedToCamera = true;
        this.userUIHeader.alpha = 1;
        this.game.world.bringToTop(this.userUIHeader);


    },
    /*
     * ui
     * ---------------------------------------
     * 
     * @param {string} bgImage
     * @returns {undefined}
     */
    ui: function () {
        var
                self = this,
                game3 = Game.w / 4;

        /*
         * user ui metro logo 
         */
        this.userUIMetroLogo = self.game.add.sprite(5, 3, 'metro_icon');
        this.userUIMetroLogo.fixedToCamera = true;
        this.userUIMetroLogo.alpha = 1;
        this.game.world.bringToTop(this.userUIMetroLogo);

        /*
         * user ui speed limit
         */
        this.userUISpeedLimit = self.game.add.sprite(10, 60, 'speed_limit');
        this.userUISpeedLimit.fixedToCamera = true;
        this.userUISpeedLimit.alpha = 0.5;
        this.game.world.bringToTop(this.userUISpeedLimit);

        /*
         * user ui speed limit
         */
        this.userUISpeedLimitText = self.game.add.bitmapText(21, 68, 'gem', '0', 34);
        this.userUISpeedLimitText.fixedToCamera = true;
        this.userUISpeedLimitText.alpha = 0.8;
        this.userUISpeedLimitText.tint = 0xffffff;
        this.game.world.bringToTop(this.userUISpeedLimitText);

        /*
         * user ui point
         */
        this.userUIPoint = self.game.add.bitmapText(Game.w - 10, 28, 'os', 'POINTS', 18);
        this.userUIPoint.maxWidth = 100;
        this.userUIPoint.fixedToCamera = true;
        this.userUIPoint.anchor.setTo(1, 0);

        /*
         * user ui time
         */
        this.userUITime = self.game.add.bitmapText(Game.w - 10, 6, 'os', 'TIME', 18);
        this.userUITime.maxWidth = 100;
        this.userUITime.fixedToCamera = true;
        this.userUITime.anchor.setTo(1, 0);

        /*
         * user ui doors
         */
//        this.userUIDoors = self.game.add.bitmapText(game3 * 3 - 100, 6, 'os', 'ajtók zárva', 18);
//        this.userUIDoors.maxWidth = Game.w - 80;
//        this.userUIDoors.fixedToCamera = true;

        /*
         * user ui next station
         */
        this.userUIStation = self.game.add.bitmapText(30, 5, 'os', 'ns ', 18);
        this.userUIStation.maxWidth = Game.w - 80;
        this.userUIStation.fixedToCamera = true;

        /*
         * user ui passengers 
         */
        this.userUIPassengers = self.game.add.bitmapText(10, 28, 'os', 'PASSENGERS: ', 18);
        this.userUIPassengers.maxWidth = Game.w - 80;
        this.userUIPassengers.fixedToCamera = true;
        this.userUIPassengers.anchor.setTo(0, 0);

        /*
         * user ui LCD 1
         */
        this.userUILCD1 = self.game.add.sprite(Game.w - 432, Game.h - 72, 'display_lcd');
        this.userUILCD1.fixedToCamera = true;
        this.userUILCD1.alpha = 1;
        this.game.world.bringToTop(this.userUILCD1);

        /*
         * user ui LCD 2
         */
        this.userUILCD2 = self.game.add.sprite(Game.w - 221, Game.h - 72, 'display_lcd');
        this.userUILCD2.fixedToCamera = true;
        this.userUILCD2.alpha = 1;
        this.game.world.bringToTop(this.userUILCD2);

        /*
         * user ui center messages
         */
        this.userUICenterMessages = self.game.add.bitmapText(Game.w / 2, Game.h / 2, 'gem', 's', 34);
        this.userUICenterMessages.fixedToCamera = true;
        this.userUICenterMessages.anchor.setTo(0.5, 0.5);
        this.userUICenterMessages.alpha = 0;

        /*
         * user ui center messages
         */
        this.userUICenterMessagesDoor = self.game.add.bitmapText(Game.w / 2, Game.h / 2, 'gem', 's', 34);
        this.userUICenterMessagesDoor.fixedToCamera = true;
        this.userUICenterMessagesDoor.anchor.setTo(0.5, 0.5);
        this.userUICenterMessagesDoor.alpha = 0;

        /*
         * user ui distance speed limit
         */
        this.userUIDistanceSpeedLimit = self.game.add.bitmapText(70, 83, 'os', speedLimits[0].end + ' dis / ' + speedLimits[1].limit, 18);
        this.userUIDistanceSpeedLimit.fixedToCamera = true;
        this.userUIDistanceSpeedLimit.anchor.setTo(0, 0.5);
        this.userUIDistanceSpeedLimit.alpha = 1;

        /*
         * user ui exit
         */
        this.userUIExit = self.game.add.bitmapText(Game.w - 10, 83, 'os', 'EXIT', 18);
        this.userUIExit.fixedToCamera = true;
        this.userUIExit.anchor.setTo(1, 0.5);
        this.userUIExit.alpha = 1;
        this.game.world.bringToTop(this.userUIExit);
        this.userUIExit.inputEnabled = true;
        this.userUIExit.events.onInputDown.add(function () {

            if (self.train !== undefined)
                self.train.destroy();

            self.game.state.start('Menu');

        });

        /*
         * transmission 
         */
        this.userUITransmission = self.game.add.sprite(Game.w - 346, Game.h - 72, 'direction_N');
        this.userUITransmission.fixedToCamera = true;
        this.userUITransmission.alpha = 1;
        this.game.world.bringToTop(this.userUITransmission);
        this.userUITransmission.inputEnabled = true;
        this.userUITransmission.events.onInputDown.add(function () {

            switch (transmissionState) {
                case(0):
                    this.userUITransmission.loadTexture('direction_N', 0);
                    transmissionState = 1
                    transmission = 0;

                    if (self.metroCar.body.velocity.x > 0) {
                        transmission = -2;
                    }

                    break;
                case(1):
                    this.userUITransmission.loadTexture('direction_D', 0);
                    transmissionState = 2
                    transmission = 0;

                    if (self.metroCar.body.velocity.x > 0) {
                        self.metroCar.body.velocity.x -= 1.2
                    } else {
                        self.metroCar.body.velocity.x = 0;
                    }

                    break;
                case(2):
                    this.userUITransmission.loadTexture('direction_R', 0);
                    if (self.metroCar.body.velocity.x > 0) {

                    } else {
                        transmissionState = 0;
                        transmission = 0;
                    }


                    break;
            }

        }, this);

        /*
         * speed -
         */
        this.userUISlowButton = self.game.add.sprite(Game.w - 135, Game.h - 76, 'throttle_minus_1');
        this.userUISlowButton.fixedToCamera = true;
        this.userUISlowButton.alpha = 1;
        this.game.world.bringToTop(this.userUISlowButton);
        this.userUISlowButton.inputEnabled = true;
        this.userUISlowButton.events.onInputDown.add(function () {

            this.userUISlowButton.loadTexture('throttle_minus_1_d', 0);

            if (transmission > -4 && transmissionState == 2)
                transmission = transmission - 1;

            if (transmission > -4 && transmissionState == 0)
                transmission = -5;

            if (transmission == -5)
                transmission = transmission + 2;

        }, this);
        this.userUISlowButton.events.onInputUp.add(function () {

            this.userUISlowButton.loadTexture('throttle_minus_1', 0);

        }, this);

        /*
         * speed +
         */
        this.userUIFastButton = self.game.add.sprite(Game.w - 70, Game.h - 76, 'throttle_plusz_1');
        this.userUIFastButton.fixedToCamera = true;
        this.userUIFastButton.alpha = 1;
        this.game.world.bringToTop(this.userUIFastButton);
        this.userUIFastButton.inputEnabled = true;
        this.userUIFastButton.events.onInputDown.add(function () {

            this.userUIFastButton.loadTexture('throttle_plusz_1_d', 0);

            if (transmission < 2 && transmissionState == 2)
                transmission = transmission + 1;

            if (transmission > -4 && transmissionState == 0)
                transmission = -5;

        }, this);
        this.userUIFastButton.events.onInputUp.add(function () {

            this.userUIFastButton.loadTexture('throttle_plusz_1', 0);

        }, this);

        /*
         * doors
         */
        this.userUIDoorsButton = self.game.add.sprite(10, Game.h - 76, 'doors_1');
        this.userUIDoorsButton.fixedToCamera = true;
        this.userUIDoorsButton.alpha = 1;
        this.game.world.bringToTop(this.userUIDoorsButton);
        this.userUIDoorsButton.inputEnabled = true;
        this.userUIDoorsButton.events.onInputDown.add(function () {

            /*
             * ajtónyitás error üzenetei
             * -----------------------------------------
             */
            if (!this.game.physics.arcade.collide(self.stations(), self.metroCar, null, null, this)) {

                if (self.metroCar.body.velocity.x > 0) {

                    this.userUICenterMessages.alpha = 1;
                    this.userUICenterMessages.text = 'You can not open the door with a moving vehicle!';
                    this.userUICenterMessagesTween = this.game.add.tween(this.userUICenterMessages).to({alpha: 0}, 2200).start();
                    return

                }

                this.userUICenterMessages.alpha = 1;
                this.userUICenterMessages.text = 'You are not at the station';
                this.userUICenterMessagesTween = this.game.add.tween(this.userUICenterMessages).to({alpha: 0}, 2200).start();

                if (doors) {

                    doors = false;

                    self.userUIDoorsButton.loadTexture('doors_1', 0);

                    /*
                     * door CLOSE
                     */
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[5]).to({x: 64}, 800).start();
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[4]).to({x: 86}, 800).start();
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[3]).to({x: -93}, 800).start();
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[2]).to({x: -71}, 800).start();
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[1]).to({x: -249}, 800).start();
                    this.doorAnimation = this.game.add.tween(self.metroCar.children[0]).to({x: -227}, 800).start();

                }

                return

            }

            if (trainInTheStation) {

                this.userUIDoorsButton.loadTexture('doors_1', 0);

                setTimeout(function () {
                    var
                            selfThis = this;

                    doors = false;

                    /*
                     * door CLOSE
                     */
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[5]).to({x: 64}, 800).start();
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[4]).to({x: 86}, 800).start();
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[3]).to({x: -93}, 800).start();
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[2]).to({x: -71}, 800).start();
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[1]).to({x: -249}, 800).start();
                    selfThis.doorAnimation = selfThis.game.add.tween(self.metroCar.children[0]).to({x: -227}, 800).start();

                    selfThis.userUICenterMessages.text = 'Do you have to go';
                    selfThis.userUICenterMessages.alpha = 1;
                    selfThis.userUICenterMessagesTween = selfThis.game.add.tween(selfThis.userUICenterMessages).to({alpha: 0}, 2200).start();

                }, 1000);

                return
            }

            setTimeout(function () {

                doors = !doors;
                trainInTheStation = !trainInTheStation;
                self.userUIDoorsButton.loadTexture('doors_2', 0);

                /*
                 * 
                 * add station text
                 */
                this.stationSound = this.game.add.audio(stationTable[actualStation - 1].sound_k);
                this.stationSound.loop = false;
                this.stationSound.volume = 0.4;

                this.stationSound.play();

                /*
                 * door OPEN
                 */
                this.doorAnimation = this.game.add.tween(self.metroCar.children[5]).to({x: 46}, 800).start();
                this.doorAnimation = this.game.add.tween(self.metroCar.children[4]).to({x: 104}, 800).start();
                this.doorAnimation = this.game.add.tween(self.metroCar.children[3]).to({x: -111}, 800).start();
                this.doorAnimation = this.game.add.tween(self.metroCar.children[2]).to({x: -53}, 800).start();
                this.doorAnimation = this.game.add.tween(self.metroCar.children[1]).to({x: -267}, 800).start();
                this.doorAnimation = this.game.add.tween(self.metroCar.children[0]).to({x: -209}, 800).start();

            }, 0);

            /*
             * --------------------------------------------
             * RANDOM PASSENGERS
             * --------------------------------------------
             */
            (function () {
                /*
                 * generate random numbers
                 * ----------------------------------
                 */
                passengersUp = Math.round(Math.random() * 300) * passengersDay;
                passengersDown = Math.round(Math.random() * passengers) * passengersDay;

                setTimeout(function () {

                    passengers = passengers - passengersDown

                }, 700);

                setTimeout(function () {

                    passengers = passengers + passengersUp

                }, 700);

                /*
                 * add points 
                 * -----------------------------------
                 */
                points = points + 1000;

//                self.userUICenterPASSMessages.text = 'UP ' + passengersUp + ' ' + 'DOWN ' + passengersDown;
//                self.userUICenterPASSMessages.alpha = 1;
//                self.userUICenterMessagesPASSTween = this.game.add.tween(self.userUICenterPASSMessages).to({alpha: 0}, 2200).start();

            })()

        }, this);

        /*
         * user ui speed lcd
         */
        this.userSpeedLCD = self.game.add.bitmapText(Game.w - 422, Game.h - 68, 'lcd', '0', 60);
        this.userSpeedLCD.fixedToCamera = true;
//        this.userSpeedLCD.tint = 0xff0000;
        this.game.world.bringToTop(this.userSpeedLCD);

        /*
         * user ui transmission 
         */
        this.userUITrans = self.game.add.bitmapText(Game.w - 210, Game.h - 68, 'lcd', 'N', 60);
        this.userUITrans.fixedToCamera = true;
//        this.userUITrans.tint = 0xff0000;
        this.game.world.bringToTop(this.userUITrans);

        /*
         * end game message
         */
        this.end_game = this.game.add.image(Game.w / 2, Game.h / 2, "end_game");
        this.end_game.fixedToCamera = true;
        this.end_game.anchor.setTo(0.5, 0.5);
        this.end_game.x = Game.w / 2;
        this.end_game.y = Game.h / 2;
        this.end_game.alpha = 0;
        this.end_game.inputEnabled = false;
        this.end_game.events.onInputDown.add(function () {

            self.game.state.start('Outro');

        }, this);
        this.game.world.bringToTop(this.end_game);


    },
    maskLayer: function () {
        var
                self = this;

        for (var i in stationTable) {

            /*
             * add station masks
             */
            if (stationTable[i].stationMask !== null) {

                this.container['stationMASK_' + i] = self.game.add.sprite(0, 0, stationTable[i].stationMask);
                this.container['stationMASK_' + i].x = parseInt(stationTable[i].length);
                this.container['stationMASK_' + i].y = 242;

                this.container['stationMASK_' + i].stationName = stationTable[i].stationName;
                this.game.world.bringToTop(self.container['stationMASK_' + i]);

            }

        }

    },
    addCRT: function () {
        var
                self = this;

        /*
         * user ui CRT
         */
        this.userUICRT = self.game.add.sprite(0, 0, 'mask_crt');
        this.userUICRT.width = Game.w;
        this.userUICRT.height = Game.h;
        this.userUICRT.fixedToCamera = true;
        this.game.world.bringToTop(this.userUICRT);

    },
    carSound: function () {
        var
                self = this;


        if (Math.round(self.metroCar.body.velocity.x / 15) > 0) {
            self.train.volume = 0.3;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 3) {
            self.train.volume = 0.3;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 6) {
            self.train.volume = 0.4;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 9) {
            self.train.volume = 0.45;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 12) {
            self.train.volume = 0.50;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 15) {
            self.train.volume = 0.55;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 18) {
            self.train.volume = 0.60;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 20) {
            self.train.volume = 0.65;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 23) {
            self.train.volume = 0.70;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 25) {
            self.train.volume = 0.75;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 28) {
            self.train.volume = 0.8;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 31) {
            self.train.volume = 0.9;
        }
        if (Math.round(self.metroCar.body.velocity.x / 15) > 33) {
            self.train.volume = 1;
        }

    },
    speedLimit: function () {
        var
                self = this,
                actualTrainPosition = Math.round(self.metroCar.x) - 300;

        if (actualTrainPosition > speedLimits[speedLimitsActualState].start && actualTrainPosition < speedLimits[speedLimitsActualState].end) {

            this.userUIDistanceSpeedLimit.text = speedLimits[speedLimitsActualState].end - actualTrainPosition + ' dis' + (speedLimitsActualState + 1 !== speedLimits.length ? ' / ' + speedLimits[speedLimitsActualState + 1].limit : '');

            if (Math.round(self.metroCar.body.velocity.x / 15) > speedLimits[speedLimitsActualState].limit) {

                points = points - 0.105;

            }

        }

        if (actualTrainPosition > speedLimits[speedLimitsActualState].end) {
            speedLimitsActualState++
        }

    },
    carMove: function () {
        var
                self = this;

        switch (transmission) {
            case( - 5):

                self.metroCar.body.velocity.x -= 0.5

                if (self.metroCar.body.velocity.x <= -100)
                    self.metroCar.body.velocity.x += 0.5

                break;
            case( - 4):
                if (self.metroCar.body.velocity.x > 0) {

                    setTimeout(function () {

                        points = points - 0.105;
                        self.userUICenterMessages.alpha = 1;
                        self.userUICenterMessages.text = 'Emergency brake!';
                        self.userUICenterMessagesTween = self.game.add.tween(self.userUICenterMessages).to({alpha: 0}, 1000).start();

                    }, 800)

                    self.metroCar.body.velocity.x -= 6

                } else {
                    self.metroCar.body.velocity.x = 0;
                }
                break;
            case( - 3):
                if (self.metroCar.body.velocity.x > 0) {
                    self.metroCar.body.velocity.x -= 2
                } else {
                    self.metroCar.body.velocity.x = 0;
                }
                break;
            case( - 2):
                if (self.metroCar.body.velocity.x > 0) {
                    self.metroCar.body.velocity.x -= 1.2
                } else {
                    self.metroCar.body.velocity.x = 0;
                }
                break;
            case( - 1):
                if (self.metroCar.body.velocity.x > 0) {
                    self.metroCar.body.velocity.x -= 0.8
                } else {
                    self.metroCar.body.velocity.x = 0;
                }
                break;
            case(0):
                if (self.metroCar.body.velocity.x > 0) {
                    self.metroCar.body.velocity.x -= 0.09
                } else {
                    self.metroCar.body.velocity.x = 0;
                }
                break;
            case(1):
                if (self.metroCar.body.velocity.x >= 0)
                    self.metroCar.body.velocity.x += 1.01
                if (self.metroCar.body.velocity.x >= 500)
                    self.metroCar.body.velocity.x += -0.5
                if (self.metroCar.body.velocity.x >= 600)
                    self.metroCar.body.velocity.x += -0.2
                if (self.metroCar.body.velocity.x >= 800)
                    self.metroCar.body.velocity.x += -0.3
                break;
            case(2):
                if (self.metroCar.body.velocity.x >= 0)
                    self.metroCar.body.velocity.x += 2
                if (self.metroCar.body.velocity.x >= 500)
                    self.metroCar.body.velocity.x += -1
                if (self.metroCar.body.velocity.x >= 600)
                    self.metroCar.body.velocity.x += -0.7
                if (self.metroCar.body.velocity.x >= 800)
                    self.metroCar.body.velocity.x += -0.3
                break;
        }


    },
    points: function () {
        var
                self = this;

        if (doors && self.metroCar.body.velocity.x > 0) {

            points = points - 0.005;

        }

        return;

        switch (this.game.physics.arcade.collide(self.stationUP_1, self.metroCar, null, null, this) || this.game.physics.arcade.collide(self.stationUP_2, self.metroCar, null, null, this)) {
            case(true):


                break;
        }


    },
    timing: function () {
        var
                self = this;

        points = points - 100;

        this.userUICenterMessages.alpha = 1;
        this.userUICenterMessages.text = 'You late! -100 point';
        this.userUICenterMessagesTween = this.game.add.tween(this.userUICenterMessages).to({alpha: 0}, 2200).start();

        this.timer.stop();

    },
    timingUI: function (time) {
        var
                self = this;

        time = time * 30000;

        if (this.timer !== undefined)
            this.timer.stop();

        //  Create our Timer
        this.timer = this.game.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds

        this.timer.loop(time, self.timing, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        this.timer.start();

//    }
//        h = timeTable[0].startTime.substring(0, 2);
//        m = timeTable[0].startTime.substring(2, 4);
//
//        if (timer > 3) {
//            timer = 0;
//            m = m + 1;
//        }
//
//        return h + ':' + m + ':' + Math.round(timer);

    },
    stations: function () {
        var
                self = this;

        if (this.game.physics.arcade.collide(self.container['stationUP_' + actualStation], self.metroCar, null, null, this)) {

            actualStation++;
            trainInTheStation = false;
            /*
             * start timer
             */
            self.timingUI(parseInt((stationTable[actualStation].startTime)));

            this.stationSound = this.game.add.audio(stationTable[actualStation - 1].sound);
            this.stationSound.loop = false;
            this.stationSound.volume = 0.4;

            this.stationSound.play();

            if (actualStation === 7) {

                this.userUICenterEndMessage = this.game.add.tween(this.end_game).to({alpha: 1}, 200).start();

                setTimeout(function () {

                    self.game.paused = true;
                    window.localStorage.setItem('points', points);

                    self.game.input.onDown.add(function () {

                        self.game.paused = false;
                        self.game.state.start('Outro');

                    }, self);

                }, 500);



                self.metroCar.body.velocity.x = 0.8


            }

        }

        actualDistance = (self.container['stationUP_' + actualStation].x + 1480) - self.metroCar.x;
        actualStationName = self.container['stationUP_' + actualStation].stationName;

        return self.container['stationUP_' + (actualStation - 1)]

    },
    /*
     * Calculate current aspect ratio
     * ---------------------------------------
     * 
     * @ returns {number}
     */
    calculateAspectRatio: function () {
        var
                self = this;
        return Game.w / Game.h
    },
    shuffle: function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            ;
        return o;
    },

};

function startTimer(duration, display) {


}
