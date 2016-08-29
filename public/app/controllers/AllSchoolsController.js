(function () {

    angular.module('app')
        .controller('AllSchoolsController', ['dataService', 'notifier', AllSchoolsController]);

    function AllSchoolsController(dataService, notifier) {

        var self = this;

        dataService.getAllSchools()
            .then(function(schools) {
                self.allSchools = schools;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());