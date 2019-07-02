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
 */