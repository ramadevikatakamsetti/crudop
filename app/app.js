(function(){
    
    
    angular.module("route",["header","home","register","employee","edit","ui.router","ngMessages","LocalStorageModule"]);
    
    angular.module("route")
        
        .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
                $urlRouterProvider.otherwise("/home");
                var homeobj ={
                    
                    templateUrl:'app/template/home/home.html',
                    url:"/home",
                    controller:"homeCtrl",
                    
                    
                };
                
                var registerObj={
                    
                    templateUrl:'app/template/register/register.html',
                    url:"/register",
                    controller:"registerCtrl"
                };
                
                 var employeeObj={
                    
                     name:"employee",
                    templateUrl:'app/template/employee/employee.html',
                    url:"/employee",
                    controller:"employeeCtrl",
                     params:{empData:""}
                };
                                    
                var editobj ={
                     
                     name:"edit",
                     templateUrl:'app/template/edit/edit.html',
                     url:"/edit",
                     controller:"editCtrl",
                     params:{edit:null}
                                    
                                    };
                
                $stateProvider.state("home",homeobj);
                $stateProvider.state("register",registerObj);
                $stateProvider.state("employee",employeeObj);
                                    $stateProvider.state("edit",editobj);
        
    }]);
})();