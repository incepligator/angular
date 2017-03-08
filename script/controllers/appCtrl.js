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
                          
                                    
                        $scope.sampleArray=["cat","dog","bat"];           
                          
                         $scope.addAnimal=function(){
                             $scope.sampleArray.push($scope.animal);
                             
                         }            
                                     
                                    
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
                                
                                    
                         $scope.personArray=[];
                                     
                                     $scope.personArray.push(person1);
                                      $scope.personArray.push(person2);
                                      $scope.personArray.push(person3);
                                    
                                    console.log($scope.personArray[0]);
                                     
                                    
                                     
                                     
                                     
                                    $scope.sampleSubmit=function(){
                                        
                                        event.preventDefault();
                                        var samplePerson={
                                            
                                            "firstName":$scope.formModel.firstName,
                                             "lastName":$scope.formModel.lastName,
                                             "phone":$scope.formModel.phone,
                                        }
                                        
                                        //for empty default value 
                                        $scope.formModel={};
                                        
                                        $scope.personArray.push(samplePerson);
                                        console.log($scope.formModel);
                                        console.log($scope.personArray);
                                    }
                                     
                                  }]);


                    