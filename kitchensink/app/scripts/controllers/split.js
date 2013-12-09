/*global kitchensink*/

kitchensink.Controllers = kitchensink.Controllers || {};

(function() {
    'use strict';

    /**
     * The AbstractController provides the primary mechanism for all
     * kitchensink controllers. Each kitchensink controller inherits
     * from this controller.
     */
    kitchensink.Controllers.SplitController = M.Controller.extend({

        // Contains the current headerView
        headerView: null,

        // Contains the current contentView
        contentView: null,

        // The headline which will be displayed in the headerView
        pageHeadline: 'Split',

        // Called from the router when the application starts
        applicationStart: function(settings) {

            // Create a layout and apply it to the application
            var _layout = M.SwitchHeaderContentLayout.extend().create(this, null, true);
            kitchensink.setLayout(_layout);
            this._initViews(settings);
        },

        // Called from the router everytime the route/url matchs the controller (binding in main.js)
        show: function(settings) {
            this._initViews(settings);
            var _layout = M.SwitchHeaderContentLayout.extend().create(this, null, true);
            if(_layout._type === kitchensink.getLayout()._type){
                kitchensink.getLayout().startTransition();
            } else {
                this.applicationStart();
            }
        },

        // Called for every controller when the application is ready. applicationStart is always called before.
        applicationReady: function(){
            this.registerToMenu(kitchensink.router.menuController);
        },

        // This method assign the header and content view to the current layout.
        _applyViews: function() {
            kitchensink.getLayout().applyViews({
                header: this.headerView,
                content: this.contentView
            });
        },

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = kitchensink.Views.SplitView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = kitchensink.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
        },

        // Register menu item for this view
        registerToMenu: function( menuController ) {
            menuController.registerMenuItem({
                _value_: 'Split',
                goto: 'split'
            });
        },
    });

})();
