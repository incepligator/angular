
"use strict";

angular.module("app").service("person",function(){
   var firstName,lastName,phone;
    
    var person1={
       "firstName":"John",
        "lastName":"Doe",
        "phone":"123-123-1233" 
    };
    var person2={
        "firstName":"George",
        "lastName":"Harrison",
        "phone":"123-123-1233"
    };
    var person3={
       "firstName":"Babu Ram",
        "lastName":"Bhattrai",
        "phone":"123-123-1233" 
    };
    
    this.personArray = [];
    this.personArray.push(person1);
    this.personArray.push(person2);
    this.personArray.push(person3);
    
   this.personModel={
        "firstName":"",
        "lastName":"",
        "phone":""
   };

    this.sampleSubmit=function(){
        event.preventDefault();
        this.personArray.push(this.personModel);
    }
   
   this.test="hello Worlds from service";
   this.getFirstName=()=>this.personModel.firstName;
   this.getLastName=()=>this.personModel.lastName;
   this.getPhone=()=>this.personModel.phone;
   this.setFirstName=(fName)=>this.personModel.firstName=fName;
   this.setLastName=(lName)=>this.personModel.lastName=lName;
   this.setPhone=(ph)=>this.personModel.phone=ph;
   this.testOutput=()=>{
        console.log(this.getFirstName());
        console.log(this.getLastName());
        console.log(this.getPhone());
    }
});


"use strict";
angular.module("app").controller("appCtrl",["$scope","person",function($scope,person){
    
    $scope.random = person.test;
    $scope.submit = function(){
        $scope.random="Good Morning";
    };
    
    $scope.formModel=person.personModel;
    $scope.sampleArray=["cat","dog","bat"];
    $scope.addAnimal=function(){
        $scope.sampleArray.push($scope.animal);
    }
    $scope.$watch(
        function(){
            return person.test
        }
        ,
        function(newVal,oldVal){
            $scope.random = newVal;
        });
    $scope.personArrayCtrl = person.personArray; 
    
    $scope.sampleSubmit=function(){
        event.preventDefault();
        
        person.personModel={
          "firstName":$scope.formModel.firstName,
          "lastName":$scope.formModel.lastName,
          "phone":$scope.formModel.phone
        };
        person.sampleSubmit();
    }
}]);


<!doctype html>
<html>
    <head>
        <title>Angular App</title>
        <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
    </head>
    <body ng-app="app">
        <h1>First Angular App</h1>
        <div ng-controller="appCtrl">
            One way databinding = {{::random}}<br>
            Two way databinding = {{random}}<br>
            <input type="text" ng-model="random">
            <button ng-click="submit()">change</button>
            
            <br>
            <h1>Form Example</h1>
            <table class="table table-hover">
                <tr>
                    <th>First Name</th>
                    <td>
                        <input type="text" ng-model="formModel.firstName">
                    </td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td><input type="text" ng-model="formModel.lastName"></td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td><input type="text" ng-model="formModel.phone"></td>
                </tr>
            </table>
            <button ng-click="sampleSubmit()" class="btn btn-success">Submit</button>
            
            <table class="table table-hover">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
                <tr ng-repeat="person in personArrayCtrl track by $index">
                    <td>{{person.firstName}}</td>
                    <td>{{person.lastName}}</td>
                    <td>{{person.phone}}</td>
                </tr>
            </table>
            
            <br>
            <h1>ng-repeat sample</h1>
            <input type="text" ng-model="animal">
            <button ng-click="addAnimal()">
                AddAnimal
            </button>
            <ol>
                <li ng-repeat="item in sampleArray track by $index">
                    {{item}}
                </li>
            </ol>
        </div>
        
        <div ng-controller="appCtrl2">
            asdfasdfs
            <ol>
                <li ng-repeat="test in sampleArray2 track by $index">{{test.firstName}}</li>
            </ol>
            <button ng-click="testService()">update service val</button>
        </div>
        
        <!--JS Dependencies-->
        <script type="text/javascript" src="/node_modules/angular/angular.js"></script>
        <script type="text/javascript" src="/scripts/app.js"></script>
        <script type="text/javascript" src="/scripts/controllers/appCtrl.js"></script>
        <script type="text/javascript" src="/scripts/controllers/appCtrl2.js"></script>
        <script type="text/javascript" src="/scripts/services/person.js"></script>
    </body>
</html>