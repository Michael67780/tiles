
Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Viewport',
    layout: 'border',

    requires: [
        'Ext.plugin.Viewport',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
        region: 'center',
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'mainlist',
                viewModel: {
                    data: {
                        type: 'PLAN'
                    }
                },
                flex: 1
            },

            {
                xtype: 'mainlist',
                viewModel: {
                    data: {
                        type: 'IN PROGRESS'
                    }
                },
                flex: 1
            },

            {
                xtype: 'mainlist',
                viewModel: {
                    data: {
                        type: 'TESTING'
                    }
                },
                flex: 1
            },

            {
                xtype: 'mainlist',
                viewModel: {
                    data: {
                        type: 'DONE'
                    }
                },
                flex: 1
            }
        ]

    },

    {
        xtype: 'panel',
        region: 'south',
        bodyPadding: 12,
        bodyStyle: 'font-weight: bold; background: white;',
        frame: true,
        bind: {
           html: '{currentTileInfo}'
        }
    }
    ]
});
