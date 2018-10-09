Ext.define('App.model.Task', {
    extend: 'App.model.Base',

    fields: [
        'firstName', 'lastName', 'taskName', 'importance',
        //определяем порядок сортировки по важности
        {
            name: 'importanceOrder',
            calculate: function(r){
                var v = r.importance;
                if(v === 'MUST') {
                    return 1;
                } else if (v === 'SHOULD') {
                    return 2;
                } else if (v === 'COULD') {
                    return 3;
                } else {
                    return 4;
                }
            }
        },

        //цвет плитки зависит от важности задачи
        {
            name: 'color',
            calculate: function(r){
                var v = r.importance;
                if(v === 'MUST') {
                    return 'red';
                } else if (v === 'SHOULD') {
                    return '#ffff33';
                } else if (v === 'COULD') {
                    return 'lightgreen';
                } else {
                    return 'white';
                }
            }
        },

        {
            name: 'date',
            convert: function(v){ //timestamp as input
                return new Date(v);
            }
        }
    ],
});
