/**
 * In OOP a singleton can be implemented by having a class reference to the object itself,
 * creating a private constructor, and a static public getter that checks whether or not the instance of itself
 * has been created. The public getter will either call the private constructor and return the newly instantiated
 * object or return the instance if it has already been created.
 * 
 * In Javascript there is no true private vs public scope so the implementation is different. Below is a simple
 * example.
 */

 // Singleton
 let singleton = new function() {
   this.propertyOne = 'Singleton\'s are cool',
   this.propertyTwo = 'But can get very lonely'
   this.getInformation = function() {
     return this.propertyOne + '\n' + this.propertyTwo;
   }
 }

 console.log(singleton.getInformation());