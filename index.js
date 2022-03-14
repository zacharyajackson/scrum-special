// In JS functions are objects
import Teacher, { promote } from './teacher';
import React, { Component } from 'react';

/**
 * Default -> import ... from "";
 * Named -> import { ... } from "";
 */


const people = {
      name: "Tester",
      walk() {
            let self = this; // leaving a variable for my self
            setTimeout(() => { // Arrow functions do not rebind the *this* key-word
                  console.log("this", this); // all stand alone functions call the window object with this, "self"...strict mode does not overide here in this scope.
            }, 1000); // set for a time out of thousand millis to function.      
            console.log("this", self); // *this* is now bound on people who have the walk method as my self
      },
      read() {
            console.log("read", this);
      }
};

people.walk();
people.read();

const walk = person.walk.bind(people); // with the bind method we can set the value of *this* always in this global scope
walk();

const jobs = [
      { id: 1, isActive: true },
      { id: 2, isActive: true },
      { id: 3, isActive: false },
];

//const activeJobs = jobs.filter(function (jobs) { return jobs.isActive;  }) // see belowe for the Fat Arrow version
const activeJobs = jobs.filter(job => job.isActive);
activeJobs();
const tSquare = number => number * number; // cleaner syntax ... fat arrow can get rid of the function key word
console.log(tSquare(5)); // logging result to the console

const colors = ['red', 'green', 'blue'];
//const items = colors.map(color => '<li>' + color + '</li>'); // this is mapping the array of colors, old way w/o timplate literals
const items = colors.map(color => `<li>${color}</li>`); // this is a template literal and it is made with backticks instaead of quotes. dollar sign brackets calls 
console.log(items); // new array here. Very usefull in React

// Destructuring 
const address = {
      street: "",
      city: "",
      zip: ""
};

const { street: st } = address; // This is abstracting the properties via destructuring

// Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = { ...first, ...second, location: "USA" };
//const combined  = [...first, 'a', ...second, 'b']; // the three dots do the spreading
const clone = [...first];
console.log(first);
console.log(clone, combined); // logging the same and the combined object spread w/ lacation string

// Rest & Spread Operators
function myBio(firstName, lastName, ...associates) {
      return `${firstName} ${lastName} runs ${associates}`; // also template literals here for the Bla Bla-bla law-blog associated
};

read(myBio);
myLawFirm("Bla", "Bla-bla", "Bla-balblaya", "Lob-law", "law-blog");

myLawFirm(...["Bla-blablaya", "lob-law", "law-blog"]);

// Objects & Classes

// Blueprint for Esquire objects
class Esquire {
      constructor (name) {
            this.name = name;
      }

      walk() {
            console.log("walk"); // we do not want to duplicate this walk function in each class of objects that can walk
      }
};

const lawyer = new Esquire("Lobb");
lawyer.walk.toString(myLawFirm);

// Next Level inheratance
// React 
class Teacher extends Esquire { // This is a child class of the Esquire Class
      constructor (name, degree) { // this is a custom constructor w/ two args
            super(name); // calling the method super of Parent ... passing the name arg initializes the Class with a name
            this.degree = degree;
      }

      teach() {
            console.log("teach");
      }
};

const teacher = new Teacher("Lobb", "Esq");
teacher.degree("");
teacher.teach(); // teach
teacher.read(this); // this was inherited from

// Modules... each file is a module. 



