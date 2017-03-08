"use strict";

angular.module("app").controller("appCtrl",
                                 
                                 ["$scope",function($scope) {
                                     
                                    $scope.random="Hello Shrawan";
                             //       $scope.firstName="Tonald   ";
                             //       $scope.lastName="Kyamu";
                                     
                                     
                                     
                                     $scope.submit=function()
                                     {
                                     $scope.random="Hello micheal";
                                     
                                     }
                                     
                                     
                                     
                                    $scope.formModel={
                                        
                                         "firstName":"John",
                                         "lastName":"Shrestha",
                                         "phone":"421385",
                                     }
                                    
                                    
                                    $scope.sampleSubmit=function(){
                                        
                                        event.preventDefault();

                                        console.log($scope.formModel);
                                        
                                    }
                                     
                                  }]);