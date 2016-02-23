Ext.define('appsStudio.view.Stock', {
    extend: 'Ext.Container',
    xtype: 'stock',
    requires: [
        'Ext.Menu'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                //docked: 'top',
                title: 'Прототип FREE',
                items: [
                    {
                        ui: 'back',
                        text: '<',
                        align: 'left'
                    }
                ]
            },
            {
                xtype: 'panel',
                docked: 'bottom',
                text: 'Stock'
            }
        ]
    }
});