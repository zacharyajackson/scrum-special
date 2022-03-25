import { Gnosis } from './person';

export function promote() { };

export default class Teacher extends Gnosis {
      constructor(name, degree) {
            super(name);
            this.degree = degree;
      }

      teach() {
            console.log("knowlege");
      }
} 
// The Objects we define in a module are private by default
// Classes are Objects w/ syntatic sugar
