(function () {

    angular.module('app')
        .controller('AllClassroomsController', ['dataService', 'notifier', AllClassroomsController]);

    function AllClassroomsController(dataService, notifier) {

        var self = this;

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                self.allClassrooms = classrooms;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());