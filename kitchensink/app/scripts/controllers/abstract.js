/*global kitchensink*/

kitchensink.Controllers = kitchensink.Controllers || {};

(function() {
    'use strict';

    kitchensink.Controllers.AbstractController = M.Controller.extend({

        headerView: null,
        contentView: null,
        pageHeadline: '',

        /**
         * The application start (after reload)
         */
        applicationStart: function() {
            var _layout = M.SwitchHeaderContentLayout.design(this, null, true);
            kitchensink.setLayout(_layout);
            this._initViews();
        },

        show: function() {
            this._initViews();
            var _layout = M.SwitchHeaderContentLayout.design(this, null, true);
            if( _layout._type === kitchensink.getLayout()._type ) {
                kitchensink.getLayout().startTransition();
            } else {
                kitchensink.setLayout(_layout);
                this._initViews();
            }
        },

        applicationReady: function() {
            this.registerToMenu(kitchensink.router.menuController);
        },

        _applyViews: function() {
            kitchensink.getLayout().applyViews({
                header: this.headerView,
                content: this.contentView
            });
        },

        _initViews: function() {
            // OVERRIDE ME PLEASE
        },

        registerToMenu: function() {
            // OVERRIDE ME PLEASE
        }
    });

})();
