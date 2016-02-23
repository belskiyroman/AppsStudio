Ext.define('appsStudio.view.About', {
    extend: 'Ext.Container',
    xtype: 'about',
    requires: [
        'Ext.Menu'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                //docked: 'top',
                title: 'О нас',
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
                items: [
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Faceboock'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Vkontakte'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Twitter'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Google'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Instagram'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'Youtube'
                    },
                    {
                        xtype: 'button',
                        cls: 'social',
                        ui: 'action',
                        text: 'appsstudio.ru'
                    },
                ]
            }
        ]
    }
});