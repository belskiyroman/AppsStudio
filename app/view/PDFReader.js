Ext.define('appsStudio.view.PDFReader', {
    extend: 'Ext.Container',
    xtype: 'pdfReader',
    requires: [
        'Ext.Menu'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                //docked: 'top',
                title: 'PDFReader',
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
                text: 'PDFReader'
            }
        ]
    }
});