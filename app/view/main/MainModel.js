
Ext.define('App.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'App',

        current: null,

        locale: {
            //на случай если хотим дать колонкам альтернативное название
            columns: {
                'IN PROGRESS': 'В РАЗРАБОТКЕ',
                'PLAN': 'PLAN',
                'TESTING': 'TESTING',
                'DONE': 'DONE'
            }
        }
    },

    stores: {
        store: {
            type: 'main'
        }
    },

    formulas: {
        //данные для строки статуса
        currentTileInfo: function(get){
            var r = get('current'),
                status = get('current.status'); //подписываемся на изменения статуса

            if(!r) return '';

            var date = Ext.util.Format.date(r.get('date'), 'd.m.Y H:i');

            var tpl = [
                'Номер задачи: {0}',
                'ФИО: {1}, {2}',
                'Наименование задачи: {3}',
                'Дата: {4}',
                'Статус: {5}',
                'Важность: {6}'
            ].join('<br/>');

            return Ext.String.format(tpl, r.get('id'), r.get('lastName'), r.get('firstName'),  r.get('taskName'), date, status, r.get('importance'));
        }
    }

});
