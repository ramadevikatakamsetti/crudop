(function(){
    
    function editCtrl($scope,$state,localStorageService){
        
        function init() {
        $scope.user=$state.params['edit'];
       if($scope.user==null)
       $scope.user=localStorageService.get('localData');
    }
    init();
    
    }
    angular.module("edit").controller("editCtrl",["$scope","$state", "localStorageService",editCtrl]);
})();