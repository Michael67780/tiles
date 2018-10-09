Ext.define('App.store.Main', {
    extend: 'Ext.data.Store',

    alias: 'store.main',

    model: 'App.model.Task',

    data: { items: [
        { id: 'TSK-123', taskName: 'NOT important task', firstName: "Вася", lastName: "Пупкин", status: 'DONE', importance: 'COULD', date:  1539018552982},
            { id: 'TSK-124', taskName: 'Very important task', firstName: "Петя", lastName: "Камушкин", status: 'DONE', importance: 'MUST', date:  1539018552982},
            { id: 'TSK-125', taskName: 'NOT important task', firstName: "Вася", lastName: "Пупкин", status: 'DONE', importance: 'COULD', date:  1539018552982},
            { id: 'TSK-127', taskName: 'NOT SO important task', firstName: "Петя", lastName: "Камушкин", status: 'TESTING', importance: 'SHOULD', date:  1539018552982},
            { id: 'TSK-129', taskName: 'NOT SO important task', firstName: "Вася", lastName: "Пупкин", status: 'TESTING', importance: 'SHOULD', date:  1539018992982}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
