// In JS functions are objects


const people = {
      name: "Tester",
      walk() {
      console.log(this); // *this* 
      }
};

people.walk();

const walk = person.walk.bind(people); // with the bind method we can set the value of *this* always
walk();

const jobs = [
      { id: 1, isActive: true },
      { id: 2, isActive: true },
      { id: 3, isActive: false },
];

//const activeJobs = jobs.filter(function (jobs) { return jobs.isActive;  }) // see belowe for the Fat Arrow version
const activeJobs = jobs.filter(job => job.isActive);