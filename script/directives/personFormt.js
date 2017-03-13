"use strict";

angular.module("app").directive("personForm",[function(){
    
    
    
    return{
        
        restrict:"EAMC",
        
        templateUrl:"/views/personForm.html",
        
    /*    template:`
                    <table class="table table-hover">
                    <caption > {{tableHeader}}</caption>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>

                    <tr> 
                        <td>Jitu</td>
                        <td>Khadra</td>

                    </tr>
                    
                    <tr> 
                        <td>shrawan</td>
                        <td>bhandari</td>

                    </tr>

                    <tr> 
                        <td>kabir</td>
                        <td>makaru</td>

                    </tr>

                    <tr> 
                        <td>sudep</td>
                        <td>wasting</td>

                    </tr>
                    <tr> 
                        <td>{{sampleFirstName}}</td>
                        <td>{{sampleLastName}}</td>

                    </tr>
                </table>


`,
    */    
/*        controller:["$scope",function($scope){
            
            $scope.sampleFirstName="John";
            $scope.sampleLastName="Doe";
            $scope.tableHeader="Sample hearder form";
        }]
        ,
        
        link:function(scorpe){
        
        scorpe.sampleFirstName="mikey";
    }*/
        
        
        
        controller:"appCtrl"
    };
    
    
}]);

