(function(){
    function homeCtrl($scope,$state){
        console.log($state);
        $scope.data=$state.params.homeData;
        
        
    }
    
    angular.module("home").controller("homeCtrl",["$scope","$state",homeCtrl]);
})();