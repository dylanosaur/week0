/**
 * An object literal is (literally) a way to define an object.
 * 
 */

const abby = {
    firstName: 'Abby',
    lastName: 'Adams', 
    sayHello: function() {console.log(`Hello I'm ${this.firstName} ${this.lastName}`)}
 }

 abby.sayHello();

 /**
  * note that variables hold references to objects
  * obj2 = obj1
  * if obj2 is mutated, obj1 is mutated as well
  */

  /**
   * properties can be stored in arrays as well, but there are differences between
   * arrays and objects
   * 
   * You can assign values to weird fields in an array, like array[-12]
   * -12 isnt a valid index, so JS just assumes you mean '-12'
   */


let myArray = [2,3,4,5,6];
myArray['field1'] = 'information'
myArray[12] = -10;
myArray.field2 = 'newinfo'

console.log(myArray);

let myObj = { field1: 'info on object', 12: 'property at obj.12'};
console.log(myObj);

/**
 * Notice that the arrays print out [] and objects print out with {}
 * 
 */