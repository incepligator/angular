"use strict";

angular.module("app").directive("binding", function(){
    
    return{
        
        restrict:"E",
        
        templateUrl:"/views/binding.html",
        controller:"appCtrl"
    }
})