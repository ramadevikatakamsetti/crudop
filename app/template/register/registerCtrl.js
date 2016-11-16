(function(){
    function registerCtrl($scope,$state,empSvc){
        /*$scope.user=$state.params.edit;*/
        $scope.user={};
        
        $scope.save = function(){
           console.log($scope.user);
            empSvc.saveData($scope.user);
                    
            empSvc.getEmpData()
            .then(function(data){
                $scope.employees=data;
            })
            .catch(function(error){
                error.message=true;
            });
            
            alert("Record Saved Successfully");
            $scope.user={};
            
            
            $state.go("employee");
            
            
        };
        
    }
    
    angular.module("register").controller("registerCtrl",["$scope","$state","empSvc",registerCtrl]);
})();