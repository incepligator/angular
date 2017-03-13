"use strict";

angular.module("app").factory("personFactory",[function(){
    
    var personModel={
        
        "firstName":"",
        "lastName":"",
        "phone":""
    };
  //  alert("wtf");
    return {
        
        
        setFirstName:function(fName){
            personModel.firstName=fName;
            
        },
        
        setLastName:function(lName){
            
            personModel.lastName=lName;
            
        },
        setPhone:function(ph){
            personModel.phone=ph;
            
        },
        
        getFirstName:function(){
        
        return personModel.firstName;
        
        },

           getLastName:function(){
            return personModel.lastName;

        },

           getFirstName:function(){
            return personModel.firstName;

        },
          getPhone:function(){
            return personModel.phone;

        },

        test:function(){
            console.log(personModel);
        }
    }
}]);
                              
                              
                              