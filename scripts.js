/**
 * Focus and Required Understanding
 * Let vs. var or const
 * Objects
 * The `this` keyword and its' behavior
 * Binding `this`
 * Arrow Functions
 * Arrow Functions & `this`
 * Arrow.map Method
 * Object Destructuring
 * Spread Operator
 * Classes
 * Inheritance
 * Modules
 * Name and Default Exports
 */

// 1. let hello-world render in browser
fsayHello = () => { // Function that is taking no parameter... using Fat Arrows. 
      console.log("Hello");
}
// 2. declare my Browser and assign it to a greeting function to call the string helloWorld camelCased.
let myBrowser = greeting('helloWorld'); // let here is ES6 key word and is prefered over var
greeting(myBrowser);
// 3. Object 
let user = {// again let key word as I want this scopped accordingly...
      name: "Lighthouse Larry",
      e_mail: "hello@lighthouselabs.ca",
      quack() {
      console.log('QUACK!');
      }
     // Functions inside functions are refered to as methods

};
//4. Another Object with two methods inside
const person = () => {
      name: 'Tester',
      walk = () => { },
      talk = () => { }

      // What is this?
      console.log(this); // this is a special key word that confuses alot of developers... It always returns a reference to the current object.
};
// make the person object walk and talk like a T-Bird
person.talk();
person.name = '';
const walk = person.walk; // walk is now a function here...
console.log(walk);
const targetMember = 'name'; // because each T-bird member has a name
person.walk();

// reassignment of the name on person
person[targetMember.value] = 'T-Bird';
// FYI the window object is the global object in browsers by default.

