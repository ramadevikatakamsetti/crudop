(function(){
    function employeeCtrl($scope,empSvc,$state,localStorageService){
        
         $scope.user={};
    empSvc.getEmpData().then(function (data) {

      $scope.employees = data;
        console.log($scope.employees);
    });
        $scope.edit=function(employee){
            localStorageService.set("localData",employee);
            angular.copy(employee,$scope.user);
            $state.go("edit",{edit:$scope.user});
        };
    }
    
    angular.module("employee").controller("employeeCtrl",["$scope","empSvc","$state", "localStorageService",employeeCtrl]);
})();