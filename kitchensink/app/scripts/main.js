/*global $, M*/


(function( global ) {
    'use strict';

    global.kitchensink = M.Application.extend().create(global.kitchensink.mconfig);

    $(document).ready(function() {

        global.kitchensink.start({
            routing: {
                routes: {
                    '': 'menuController',
                    'forms': 'formsController',
                    'buttons': 'buttonsController',
                    'modals': 'modalsController',
                    'lists': 'listsController',
                    'texts': 'textsController',
                    'tabbar(/:tab)': 'tabbarController',
                    'transitions(/:name)': 'transitionsController',
                    //m:routes
                },
                menuController: global.kitchensink.Controllers.MenuController.create(),
                formsController: global.kitchensink.Controllers.FormsController.create(),
                buttonsController: global.kitchensink.Controllers.ButtonsController.create(),
                listsController: global.kitchensink.Controllers.ListsController.create(),
                modalsController: global.kitchensink.Controllers.ModalsController.create(),
                textsController: global.kitchensink.Controllers.TextsController.create(),
                tabbarController: global.kitchensink.Controllers.TabbarController.create(),
                transitionsController: global.kitchensink.Controllers.TransitionsController.create(),
                //m:controllers
            }
        });
    });

})(this);