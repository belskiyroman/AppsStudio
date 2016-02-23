Ext.define('appsStudio.view.Main', {
    extend: 'Ext.Container',    
    // extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.Menu'
    ],
    config: {
        fullscreen: true,
        layout: 'fit',

        items: [
            {
                xtype: 'titlebar',
                ui: 'logo',
                docked: 'top'
            },
            {
                xtype: 'button',
                itemId: 'stock',
                ui: 'action',
                docked: 'top',
                text: 'Прототип FREE',
            },
            {
                xtype: 'panel',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'about',
                                ui: 'action',
                                docked: 'left',
                                text: 'О нас'
                            },
                            {
                                xtype: 'button',
                                itemId: 'pdf',
                                ui: 'action',
                                docked: 'right',
                                text: 'Портфолио'
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'pdf',
                                ui: 'action',
                                docked: 'left',
                                text: 'Готовое решение'
                            },
                            {
                                xtype: 'button',
                                itemId: 'callback',
                                ui: 'action',
                                docked: 'right',
                                text: 'Обратный звонок'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
