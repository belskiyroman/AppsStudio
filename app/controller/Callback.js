Ext.define('appsStudio.controller.Callback', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: [
            'Callback'
        ],
        refs: {
            callbackView: {
                selector: 'callback',
                xtype: 'callback',
                autoCreate: true
            },
        },
        control: {
            'callback button[ui=back]': {
                tap: 'onBackButton'
            }
        },
        routes: {
            'callback': 'show'
        }
    },
    
    
    show: function(app) {
        Ext.Viewport.setActiveItem(this.getCallbackView());
    },

    onBackButton: function(button) {
        this.redirectTo('main');
    }
});
