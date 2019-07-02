/**
 * What is a function?
 * A reusuable block of code that can be executed by calling it by its identifier.
 * Arguments - items passed to a function when it is called
 * Parameters - items used in the function
 * Method - function owned by a class/object
 * Rest Operator - operator used by JS to wrap remaining arguments into an arrayList
 * 
 *  function myFunction () { do stuff }
 */

let myVariableFunction = function() { console.log("hello"); }
myVariableFunction();
let doFunction = myVariableFunction();
doFunction;

/**
 * Rest Operator (...) is used to gather remaining arguments into an array
 * that contains all arguments that weren't mapped to a parameter
 * also called Variable Arguments or 'varargs' in other languages
 */

 function sum(a=0,b=0, ...c) {
     let startingValue = a + b;
     for(value of c){
         startingValue += value;
     }
     return startingValue;
 }

 console.log(sum(1,2,3));

 /**
  * Arrow Functions (lambdas)
  * This definition is more compact and functionally different. 
  * (parameters, ...) => { function body }
  * can be shortened by removing the parenthesis when there is only one argument
  * param => { function body }
  * remove brackets if there is only one line of code
  * param => line of code
  * 
  */