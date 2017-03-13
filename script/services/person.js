"use strict";

angular.module("app").service("person",[function(){
    
    
   var firstName, lastName, phone;
    
    
    this.test="Good morning Barca";
    
    
                       var person1={
                               "firstName":"Newyork",
                                         "lastName":"Lama",
                                         "phone":"00000000",
                             
                         } 
                                          
                                var person2={
                               "firstName":"Rock",
                                         "lastName":"Pradhan",
                                         "phone":"999999",
                             
                         } 
                                        var person3={
                               "firstName":"Monica",
                                         "lastName":"Clintion ",
                                         "phone":"7877878787",
                             
                         }  
    
    this.personModel={
        
        
        "firstName":"",
        "lastName":"",
        "phone":""
    };
    
    this.personArray=[];
    
    
    
    this.personArray.push(person1);
     this.personArray.push(person2);
     this.personArray.push(person3);
    
    this.getFirstName=()=>firstName;
    this.getLastName=()=>lastName;
    this.getPhone=()=>phone;
    
    this.setFirstName=(fName)=>firstName=fname;
    
    this.setLastName=(lName)=>lastName=lname;
    
    this.setPhone=(ph)=>phone=ph;
    
    this.testOutput=()=>{
        
        console.log(this.getFirstName());
        console.log(this.getLastName());
        console.log(this.getPhone());
        
    }
//   alert("From Service");
    
    
        
       this.sampleSubmit=function(){
                                        
                                        event.preventDefault();
//                                        var samplePerson={
//                                            
//                                            "firstName":this.personModel.firstName,
//                                             "lastName":this.personModel.lastName,
//                                             "phone":this.personModel.phone
//                                        }
                                        
                                        //for empty default value 
 //                                       $scope.formModel={};
                                        
                                        this.personArray.push(this.personModel);
//                                        console.log($scope.formModel);
//                                        console.log($scope.personArrayCtrl);
//                                        console.log(person.personArray);
                                    };
    
    
}]);