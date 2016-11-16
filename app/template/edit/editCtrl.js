(function(){
    
    function editCtrl($scope,localStorageService){
        
        function init() {
        $scope.user=$state.params['edit'];
      // if($scope.user==null)
       //$scope.user=localStorageService.get('localStorageData');
    }
    init();
    
    }
    angular.module("edit").controller("editCtrl",["$scope","localStorageService",editCtrl]);
})();