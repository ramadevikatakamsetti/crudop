(function(){
    function employeeCtrl($scope,empSvc,localStorageService){
        
         $scope.user={};
    empSvc.getEmpData().then(function (data) {

      $scope.employees = data;
        console.log($scope.employees);
    });
    }
    
    angular.module("employee").controller("employeeCtrl",["$scope","empSvc","localStorageService",employeeCtrl]);
})();