Ext.define('appsStudio.controller.PDFReader', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: [
            'PDFReader'
        ],
        refs: {
            pdfReaderView: {
                selector: 'pdfReader',
                xtype: 'pdfReader',
                autoCreate: true
            },
        },
        control: {
            'pdfReader button[ui=back]': {
                tap: 'onBackButton'
            }
        },
        routes: {
            'pdfReader': 'show'
        }
    },
    
    
    show: function(app) {
        Ext.Viewport.setActiveItem(this.getPdfReaderView());
    },

    onBackButton: function(button) {
        this.redirectTo('main');
    }
});
