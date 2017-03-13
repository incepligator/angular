"use strict";

angular.module("app").controller("appCtrl",
                                 
                                 ["$scope","person","personFactory", function($scope,person,personFactory) {
                                     
                                     
                                     
                                      personFactory.setFirstName("test1");
                                personFactory.setLastName("test2  ");     
                                 personFactory.setPhone("123");    
                                  personFactory.test(); 
                                     
                                     
                                     
                                     
                                    $scope.random="Hello Shrawan";
                             //       $scope.firstName="Tonald   ";
                             //       $scope.lastName="Kyamu";
                                     
                                  //   alert(person.test);
                                  
                                     
                                     $scope.submit=function()
                                     {
                                     $scope.random="Hello micheal";
                                     
                                     }
                                     
                                     
                                     
                                     
                                    $scope.formModel=person.personModel;
                          
                                    
                                
                            
                                     
                        $scope.sampleArray=["cat","dog","bat"];           
                          
                         $scope.addAnimal=function(){
                             $scope.sampleArray.push($scope.animal);
                             
                         }            
                                     
                                    
                 /*                         var person1={
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
                             
                         }  */
                                
                                    
                         $scope.personArrayCtrl=person.personArray;
                                     
                                /*        $scope.personArray.push(person1);
                                      $scope.personArray.push(person2);
                                      $scope.personArray.push(person3);*/
                                    
                                   // console.log($scope.personArray[0]);
                                     
                                    
                                     
                                     
                                     
                                     
                                  $scope.sampleSubmit=function(){
                                        
                                        event.preventDefault();
                                      
                                        person.personModel={
                                            
                                            "firstName":$scope.formModel.firstName,
                                             "lastName":$scope.formModel.lastName,
                                             "phone":$scope.formModel.phone
                                        }
                                        
                                        person.sampleSubmit();
                                      
                                        //for empty default value 
                                       /* $scope.formModel={};
                                        
                                        $scope.personArrayCtrl.push(samplePerson);
                                        console.log($scope.formModel);
                                        console.log($scope.personArrayCtrl);
                                        console.log(person.personArray);*/
                                    }
                                     
                                  }]);


                    