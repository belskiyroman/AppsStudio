Ext.define('appsStudio.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: [
            'Main'
        ],
        
        models: [
        ],
        refs: {
            MainView: {
                xtype: 'main',
                selector: 'main',
                autoCreate: true
            },
            stockBtn: 'main #stock',
            aboutBtn: 'main #about',
            pdfBtn: 'main #pdf',
            callbackBtn: 'main #callback'
        },
        control: {
            stockBtn: {tap: 'onStock'},
            aboutBtn: {tap: 'onAbout'},
            pdfBtn: {tap: 'onPDFReader'},
            callbackBtn: {tap: 'onCallback'}
        },
        routes: {
            'main': 'show'
        }
    },
    
    launch: function(app) {
        this.show();
    },

    show: function () {
        Ext.Viewport.setActiveItem(this.getMainView());
    },

    onStock: function () {
        this.redirectTo('stock');
    },

    onAbout: function () {
        this.redirectTo('about');
    },

    onPDFReader: function () {
        this.redirectTo('pdfReader');
    },

    onCallback: function () {
        this.redirectTo('callback');
    }
});
