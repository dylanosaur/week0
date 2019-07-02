/**
 * callback functions are functions passed to another function as an argument, such as setTimeout(callback, timoutDuration)
 * they serve as interfaces between codebases and will be called outside the context of the code they are written in
 * 
 * the 'this' context will be preserved for arrow functions, but will change when using the vanilla functions
 * i.e. instead of passing this.myFunction() to another object, pass () => this.myFunction() to the other object
 */