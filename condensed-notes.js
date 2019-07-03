/**
 * Topics
 * 
 * 0. General discussion of JS
 * 1. Naming conventions
 * 2. Control Structures
 *      a. Conditional structures: if, switch, ternary
 */

// Ternary (literally 3 part) operators allow us to conditionally 
// execute code in a compact way
let ternaryX = false;
let output = (ternaryX ? console.log('ternary true') : console.log('ternary false') );

/*
 *      b. Iterative loops:
 *          i. while, do-while
 *          ii. for
 *          iii. for-in, for-of
 *          iv. functional iteration
 * 3. Operators
 *      a. Math: +, -, *, /, %
 *      b. Re-assignment: +=, -=, etc.
 *      c. Boolean: || or, && and, ==, ===, ! for negation
 * 4. Equality and equals operators
 *      a. ==, ===
 *      b. type coersion - if JS doesn't understand, typ. coerces to numbers
 */

// not a simple example of type coersion, but a good example of
// JS being a fucking madhouse (uses truthy-falsy): apparently 
let apparentlyTrue =  1 < 2 < 3; 
// 1 < 2 evaluates to true, true < 3 is coerced into 1 < 3, which is true
let apparentlyFalse =  3 > 2 > 1;
// 3 > 2 evals to true, true > 1 is coerced into 1 > 1, which is false
console.log('ofcourse these statements are true, right?:', apparentlyTrue, apparentlyFalse);

/*
 * 5. Truthy-falsy evaluation of expressions
 *      a. 6 falsy cases - 0, NaN, null, false, '', undefined
 *      b. storing results of truthy-false expressions - last thing checked
 *      c. Guard and Default operators
 */

missingMethods = {
    description: 'this object lacks the method helloWorld',
    name: undefined
}

//Guard Operator - guard against a missing method
let result = missingMethods.helloWorld && missingMethods.helloWorld();
console.log('no error, but result gives undefined:', result);
// the next line results in an error
// result = missingMethods.helloWorld();

//Default Operator
let name = missingMethods.name || 'missingMethods'
console.log('the name is undefined, but filled in as:', name);

 /*
 * 6. Functions
 *      a. Definitions: arguments, parameters, method, rest operator
 *      b. Arrow functions
 * 7. Object literals
 *      a. how to declare
 *      b. variable reassignment with objects (variables store references)
 *      c. printing objects with console */

console.log('printing the object missingMethods defined above gives: ');
console.log(missingMethods)

/* 8. Template Literals
 *      a. uses: embedding variables, multi-line strings
 *      b. Tagging template literals
 */

// tagging template literals allows us to create strings on-the-fly to be used as
// arguments to functions
// it also facilities HTML sanitization with the use of sanitization libraries
function myTag(strings, ...args) {
    console.log(strings);
    console.log(args);
}
myTag`${'SOMETIMES'} we may need to accent ${'SPECIFIC'} words`;

/* 9. Scope
 *      a. 3 primary scopes: Global, Functional, Block
 *      b. Hoisting: using var keyword extends scope definition but not value
 * 10. Closure - allows fields reference-able in a scope to be later accessed by
 *          functions also defined in that scope. IT can also serve as a means to
 *          encapsulate fields since only the functions have access to the fields.
 */

 // demonstration of closure
const closureCreator = function() {
    const x = 10;
    const innerFunction = function() {console.log('accessing x outside its scope:', x)}
    return innerFunction;
}
inner = closureCreator();
inner();


// using closure to encapsulate properties of an object instance: myGirl
const myPerson = function() { 
    let name = 'Dre';
    return {
      getName: function() { return name; },
      setName: function(incomingName) { name = incomingName; }
    } 
}
const myGirl = myPerson();
myGirl.name = 'Monica'; // this field not writable by the user
console.log(`myGirl has a name and it's ${myGirl.getName()}`);



/** 11. Callback  - 
 * callback functions are functions passed to another function as an argument, such as setTimeout(callback, timoutDuration)
 * they serve as interfaces between codebases and will be called outside the context of the code they are written in
 *
 * 12. This (keyword)
 */

let globalThisObject = {
    someProperty: 'blue',
    someFunction: function() { 
        let output = `this object likes the color ${this.someProperty}`;
        console.log(output);
    },
    someArrowFunction: () => {
        let output = `this object likes the color ${this.someProperty}`;
        console.log(output);
    },
}

let otherThisObject = {
    someProperty: 'red',
    newFunction: null,
    someFunction: function() { 
        let output = `this object likes the color ${this.someProperty}`;
        console.log(output);
    },
    executeFunction: function(f) {
        this.newFunction = f;
        console.log('executing as function');
        this.newFunction();
        //f();
    },
    executeFunctionAsArrow: (f) => { 
        this.newFunction = f;
        console.log('executing as arrowFunction');
        this.newFunction(); 
        //f()
    }
}

globalThisObject.someFunction();
otherThisObject.someFunction();
otherThisObject.executeFunction(globalThisObject.someFunction);
//otherThisObject.executeFunction(globalThisObject.someArrowFunction);
//otherThisObject.executeFunctionAsArrow(globalThisObject.someFunction);
//otherThisObject.executeFunctionAsArrow(globalThisObject.someArrowFunction);
otherThisObject.executeFunctionAsArrow(() => globalThisObject.someFunction() );
//otherThisObject.executeFunctionAsArrow(() => globalThisObject.someArrowFunction() );

