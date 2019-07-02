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
