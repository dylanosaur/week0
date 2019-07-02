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

