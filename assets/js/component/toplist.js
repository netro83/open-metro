var appState = {
    takingPicture: true,
    imageUri: ""
};

var
    mainImageWidth = 0,
    mainImageHeight = 0;

var
    APP_STORAGE_KEY = "photoTakeState",
    FacebookAlbumName = "Színházba mentem",
    FacebookAlbumID;

var Toplist = {
    init: function (settings) {
        Toplist.config = {
            component: "Toplist"
        };
        $.extend(Toplist.config, settings);
        if ($('*[data-component="' + Toplist.config.component + '"]').length)
            Toplist.setup();
    },
    setup: function () {

        this.createFunction();

    },
    /*
     * Init function
     *
     * @returns {none}
     */
    createFunction: function () {
        var
            self = this,
            $element = $('*[data-component="' + Toplist.config.component + '"]'),
            pageID = "szm_photo_game";

        /*
         * call initToplist
         */
        self.initToplist();

    },
    /*
     * Get Toplist
     *
     * @returns {none}
     */
    initToplist: function () {
        var
            self = this,
            $element = $('*[data-component="' + Toplist.config.component + '"]');

    }

};
$(document).ready(Toplist.init);