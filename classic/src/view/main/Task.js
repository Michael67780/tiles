//виджет для отображения плитки - задачи в колонке
Ext.define('App.view.main.Task', {
    extend: 'Ext.Panel',

    xtype: 'task',
    cls: 'task-widget',

    config: {
        record: null,
        bodyPadding: 40,
        frame: true,
        border: 1,
        style: {
            borderColor: '#cecece',
            borderStyle: 'solid',
            borderRadius: '12px'
        }
    },

    viewModel: {
        formulas: {
            getBodyStyle: function(get){
                return {
                    background: get('record').get('color')
                }
            },

            getContent: function(get){
                var r = get('record');
                return Ext.String.format('{0}<br/>{1}', r.get('id'), r.get('taskName'));
            }
        }
    },


    bind: {
        bodyStyle: '{getBodyStyle}',
        html: '{getContent}'
    }


});