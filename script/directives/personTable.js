"use strict";

angular.module("app").directive("personTable", function(){
    
    return{
        
        restrict:"E",
        
        templateUrl:"/views/personTable.html",
        controller:"appCtrl"
    }
});