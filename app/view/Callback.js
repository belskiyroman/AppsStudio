Ext.define('appsStudio.view.Callback', {
    extend: 'Ext.Container',
    xtype: 'callback',
    requires: [
        'Ext.Menu'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                //docked: 'top',
                title: 'Обратный звонок',
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
                text: 'Callback'
            }
        ]
    }
});