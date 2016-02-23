Ext.define('appsStudio.controller.About', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: [
            'About'
        ],
        refs: {
            aboutView: {
                selector: 'about',
                xtype: 'about',
                autoCreate: true
            },
        },
        control: {
            'about button[ui=back]': {
                tap: 'onBackButton'
            }
        },
        routes: {
            'about': 'show'
        }
    },
    
    
    show: function(app) {
        Ext.Viewport.setActiveItem(this.getAboutView());
    },

    onBackButton: function(button) {
        this.redirectTo('main');
    }
});
