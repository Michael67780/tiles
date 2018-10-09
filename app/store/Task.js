Ext.define('App.store.Task', {
    extend: 'Ext.data.ChainedStore',

    alias: 'store.task',

    model: 'App.model.Task',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});