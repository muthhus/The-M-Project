CRMLight.ActivitiesPageController = M.Controller.extend({

    activities: null,

    init: function(isFirstTime) {

        if(isFirstTime) {

            M.Request.init({
                url: 'activities.json',
                isJSON: YES,
                beforeSend: function(req) {
                    M.LoaderView.show();
                },
                onSuccess: function(data){
                    M.LoaderView.hide();
                    CRMLight.ActivitiesPageController.set('activities', data);
                },
                onError: function(request, message){
                    M.LoaderView.hide();
                }
            }).send();

        }

    },

    openSearchPage: function() {

        this.switchToPage(M.ViewManager.getPage('activitiesSearchPage'));

    },

    openNewSelectPage: function() {

        this.switchToPage(M.ViewManager.getPage('activitiesNewSelectPage'));

    },

    openStartPage: function() {

        this.switchToPage(M.ViewManager.getPage('startPage'), null, YES);

    }

});