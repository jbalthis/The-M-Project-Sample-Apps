/*global kitchensink*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';

    kitchensink.Views.SplitView = M.View.extend({
        // The properties of a view

        // The views grid
        grid: 'col-xs-12'
    }, {
        // The childViews as object
        button: M.ButtonView.extend({
            value: 'SplitView',
            events: {
                tap: function() {
                    //
                }
            }
        })
    });

})();
