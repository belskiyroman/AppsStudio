Ext.define('appsStudio.controller.Stock', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: [
            'Stock'
        ],
        refs: {
            stockView: {
                selector: 'stock',
                xtype: 'stock',
                autoCreate: true
            }
        },
        control: {
            'stock button[ui=back]': {
                tap: 'onBackButton'
            }
        },
        routes: {
            'stock': 'show'
        }
    },
    
    
    show: function(app) {
        Ext.Viewport.setActiveItem(this.getStockView());
    },

    onBackButton: function(button) {
        this.redirectTo('main');
    }
});
