let app = angular.module("myApp",['ngMaterial', 'ngMessages']);
app.controller("eventController", function ($scope) {

    $scope.eventlist = [];  // empty event array
    $scope.sdate = new Date();





    $scope.addData = function () {

        //create object
        var event = {
          id:$scope.eventlist.length + 1,
          title:$scope.title,
          sdate:$scope.sdate,
          time:$scope.time,
          desc:$scope.desc,
        };
        // add object into array
        $scope.eventlist.push(event);
        ClearModel(); // reset values to defaults
    };

    // update function (display data in the form by clicking)
    $scope.BindSelectedData = function(event){
        $scope.id = event.id;
        $scope.title = event.title;
        $scope.sdate = event.sdate;
        $scope.time = event.time;
        $scope.desc = event.desc;

    };

    $scope.updateData = function() {
        $.grep($scope.eventlist, function (e) {
            if(e.id === $scope.id){
                e.title = $scope.title;
                e.sdate = $scope.sdate;
                e.time = $scope.time;
                e.desc = $scope.desc;
            }
        });
    };

    // delete function
    $scope.DeleteData = function (event) {
        var index = $scope.eventlist.indexOf(event); // the index of event we want to delete
        $scope.eventlist.splice(index, 1);
    };
    
    function ClearModel() {

        $scope.id = 0;
        $scope.title='';
        //$scope.sdate='';
        $scope.time='';
        $scope.desc='';
        
    }


});
