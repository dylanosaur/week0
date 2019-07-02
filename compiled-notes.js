// callback-functions-and-this.js
/**
 * callback functions are functions passed to another function as an argument, such as setTimeout(callback, timoutDuration)
 * they serve as interfaces between codebases and will be called outside the context of the code they are written in
 * 
 * the 'this' context will be preserved for arrow functions, but will change when using the vanilla functions
 * i.e. instead of passing this.myFunction() to another object, pass () => this.myFunction() to the other object
 */// closures.js
/***
 * closures are a language feature that lets the programmer manage a particular set of scope issues 
 * to make the code more predictable
 * 
 * 
 */

 const closureCreator = function() {
     const x = 10;
     const innerFunction = function() {
         console.log(x);
     }
     return innerFunction;
 }

 inner = closureCreator();
 inner();

 /**
  * Here we have the variable x being accessed, even though the function is called in the global scope
  * It can also be used as an encapsulation scheme
  */

  const myPerson = function() { 
      let name = 'Abby';

      return {
        getName: function() { return name; },
        setName: function(incomingName) { name = incomingName; }
      } 
  }
  const abby = myPerson();
  console.log(abby.getName());

  /**
   * Anything that can be accessed by the closure relations will be kept in memory
   * Anything in the scopes affected by the closure relations will be kept if there in an eval() present
   * 
   */
// control-structures.js
/**
 * Control structures are a set of operations that allow us to execute code that is
 * responsive to different inputs
 * 
 * 1. Conditional Structures
 * 2. Iterative loops
 * 
 * 
 * Predicate - an expression that provides a boolean result for use as a condition
 * Iteration - Process of doing something repeatedly
 * Conditional Statements - code block that executes conditionally given a predicate
 * 
 * 1. if - can be extended with else and else if to provide fallback behavior
 *      if (x), if (!x), 
 * 
 *      if (x) {stuff;
 *      } else if (!x) {different stuff;
 *      } 
 * 2. switch - simple way to execute conditional code when there are lots different conditions,
 *      and are preferred when there are multiple conditions. Remember to use breaks!
 *  
 *      switch(mySwitchValue) { 
 *          case 0: console.log("0"); break;
 *          case 1: console.log("its 1"); break;
 *          default: console.log("no switch values were triggered"); break;
 *      }
 * 
 * 3. Ternary operations - a compact method of conditionally executing code. Can be used in the 
 *      middle of an assignment. whereas if/switch cannot be used of a greater expression. Can be
 *      more difficult to read and should only be used to increase readability.
 *      
 *      condition ? true-case : false-case
 */

let x = true;
let output = (x ? console.log('ternary test true') : console.log('ternary test false'));

/**
 * Iterative Loops
 * 1. while, do-while - iteratively execute code until some condition is no longer true
 *      do-while checks predicate after first loop
 * 2. for - requires a tracking variable, a condition, and a mutation that defines how the variable is updated
 * 3. for-in, for-of
 *      for (let k in myStringArray) { console.log(myStringArray[key]); }
 *      for (let value of myStringArray) { console.log(value); }
 * 4. functional iteration
 *      for-each - here we are using a lambda expression as the argument to the forEach
 *      myStringArray.forEach((v) => console.log(v)); 
 * 
 * 
 */// conventions.js
/*
 * Naming conventions: preferred methods of naming identifiers. This
 * is done to provide context for what the code is doing and consistent
 * to make the code more human readable.
 * 
 * 1. Variables should be camelCaseAlways
 * 2. Classes should be PascalCase
 * 3. Fields within classes like properties should be camelCase
 * 4. Functions should be camelCase
 * 5. File names use kebab-case
 * 
 */// equality.js
/**
 * == compared to ===
 * 
 * == uses type coersion but === does not and so === between two variables of different types will be unequal
 * 
 * typically will conv numbers to strings for comparison if possible
 * '7' == '5' + '2' evaluates to false
 * '7' != '52'
 * 
 * will conv and attempt comparison if operators dont make sense
 * '5' == '10' - '5' evaluates to true
 */

 /**
  * use === by default since it is more explicit, use == if you need type coersion
  * 
  */

  

// functions.js
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
  */// hello-world.js
console.log('Hello World!');// object-literals.js
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
 */// operators.js
/**
 * Math operators
 * +,-,/,*,%
 * +=, -+, /=, *=, %=
 * more stuff in the Math object, called like Math.PI, Math.pow(), etc.
 * 
 * boolean operators:
 * or ||, and &&
 * 
 * === (contents equality, the one you generally want)
 * == (uses type coercion)
 * 
 * !=, !== not equals
 * 
 * !x - negation of x
 * 
 * 
 */// scope.js
/**
 * What is Scope?
 * The context in which the variable can be reference-able.
 * 
 * JS has 3 primary scopes
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope - variables are reference-able only within the defining code block
 * 
 * There is also using no keyword. JS doesn't know where what the scoping should be so JS
 * will put this variable in the global scope.
 * 
 * The scope of a variable depends on the location it is defined (in block, in function) and 
 * the keyword (let, var, const) used to define it. Before EcmaScript 6 standard (ES6) there was
 * just var, no let/const. There was just function/global scope.
 * 
 * Variables declared with var will also exhibit hoisting.
 * 
 * Variables declared with let will have block scope and will not be hoisted.
 * 
 * Variables declared with const is the same as let, but prevents re-assignment after declaration.
 * No re-assignment of the item, but mutations are ok.
 * 
 * 
 * Hoisting
 * 
 * console.log(letValue); //returns error
 * let letValue = 40
 * 
 * console.log(varValue); //returns undefined
 * var varValue = 40; 
 * 
 * The definition gets hoisted, the value does not get hoisted
 * 
 * 
 */// template-literals.js
/**
 * 
 * A template literal is a new (ES6) way of defining strings that has a behavioral difference from 
 * the vanilla string literal definitions. To do this the ` (backtic, grave accent) key is used.
 * 
 * 1. values can be embedded using: `${myVariable}`
 * 2. Allow for multi-line strings
 * 3. Can be nested as well
 * 4. Tagging template literals
 */
/**
 * 1. values can be embedded using: `${myVariable}`
 */
const myVariable = 'world';
console.log(`Hello ${myVariable}`);

 /**
  * 2. Allow for multi-line strings
  * 
  */

const myString = `hello
world`
console.log(myString); 

/**
 * 
 * 3. Can be nested as well
 */

const a = 'llo';
const b = 'wor';
console.log(`${`he${a} `} ${`${b}ld`}`) //yeah don't do that

/**
 * Tagging template literals
 * 
 */

function myTag(strings, ...args) {
     console.log(strings);
     console.log(args);
 }

 myTag`some ${'abc'} random string ${'def'}`;

// truthy-falsy.js
/**
 * non boolean values can be evaluated as truthy and falsy
 * 
 * 0, NaN, undefined, null, false, ''
 * 
 * everything else going to give an error or evaluate to true
 */

 result = '' || 'potato chip' //result is potato chip
 result = '' && 'potato chip' //result is ''  -- short circuiting
 result = 'dog' || 'cat' //result is dog  -- short circuiting
 result = 'dog' && 'cat' //result is cat

 /**
  * Can use this to do guard operator: object.methodName && object.methodName();
  * and the default operator: input || 'Default Field Value' 
  */// tuesday.js
/**
 * What is JavaScript? 
 * JS is a loosely-typed, lightweight, interpreted language and is commonly used
 * for manipulating webpages and browser content to create dynamic web pages.
 * 
 * Loosely-typed: Types are associated with values and not with variables.
 * 
 * Some advantages of using JavaScript:
 *  Fast development
 *  Front end dev requires it, can also be used on back end
 *  Don't need complicated dev environment
 *  Lots of community support, lots of open source content
 *  Interpreted languages tend to be quicker to run and test
 *  
 * Disadvantages
 *  Programmer is responsible for managing types
 *  No uniform module package that works cross-platform
 *  Browser code is public and often difficult to understand after being compressed
 *  Interpreted language that may not execute as efficiently as a compiled language
 * 
 */


 /**
  * JavaScript discussion
  * Control Structures
  * 
  * 
  * 
  */// types.js
/***
 *  Only a few variable types in JS,
 *      use typeof to get type
 *      obj
 *      undefined
 *      string
 *      number = 64 bit double
 *      boolean
 *      function, x = function() {}
 *      symbol, Sybol('identifier');
 *      
 *  */
// variables.js
let myVariable;

console.log(myVariable);
console.log('nothing');