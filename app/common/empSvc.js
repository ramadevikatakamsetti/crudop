(function(){
    function empSvc($http, $q){
        var self = this;
        this.employees=[];
        
        this.saveData=function(data){
            this.employees.push(data);
            //localStorageService.set("localStorageData",data);            
        };

        
        this.getEmpData=function(){
            
            var dfd=$q.defer();
            
            if(!this.employees > 0){
                
            $http.get('app/api/employeeData.json')
            .this(function(res){
                self.employees=res;
                dfd.resolve(self.employees);
            }).catch(function(err){
                dfd.reject(err);
            });
            }
            else
                {
                    dfd.resolve(self.employees);
                }
            return dfd.promise;
            
        };
    }
    
    angular.module("route").service("empSvc",['$http', '$q',empSvc]);
})();