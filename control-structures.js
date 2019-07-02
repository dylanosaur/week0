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
 */