
Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'App.store.Task',
        'App.view.main.Task'
    ],

    viewModel: {
        formulas: {
            columnName: function(get){
                return get('locale.columns')[get('type')];
            }
        },

        stores: {
            gridStore: {
                type: 'task',
                sorters: [
                    {
                        property: 'firstName',
                        direction: 'ASC'
                    },
                    {
                        property: 'importanceOrder',
                        direction: 'ASC'
                    }
                ],
                filters: [
                    {
                        property: 'status',
                        value: '{type}'
                    }
                ],
                source: '{store}'
            }
        }
    },

    viewConfig: {
        plugins: {
            gridviewdragdrop: {
                containerScroll: true
            }
        },
        listeners: {
            drop: 'onDrop'
        }
    },

    frame: true,

    bind: {
        store: '{gridStore}'
    },

    columns: [
        {
            xtype: 'widgetcolumn',
            stopSelection: false,
            widget: {
                xtype: 'task',
                bind: {
                    record: '{record}'
                }
            },
            flex: 1,
            align: 'center',
            sortable: false,
            menuDisabled: true,
            bind: {
                text: '{columnName}'
            }
        }
    ],

    listeners: {
        rowclick: 'onClick'
    },

    controller: {
        onClick: function(g, r){
            this.getViewModel().set('current', r); //текущая запись для отображения статуса внизу
        },

        onDrop: function(node, data){
            var vm = this.getViewModel(),
                rec = data.records[0];

            if(rec) {
                rec.set('status', vm.get('type'));
                vm.set('current', rec); //текущая запись для отображения статуса внизу
            }
        }
    }

});
