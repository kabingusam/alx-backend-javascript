// this returns reference to an object
// const person = {
//     name: "sam",
//     walk() {
//         console.log(this)
//     }
// };
// person.walk();


// --> Arrow functions

// const square = function (number) {
//     return number * number;
// } 

// const square = number => number * number;
// // console.log( square(5));

// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ]
// const activeJobs = jobs.filter(function(jobs) { return jobs.isActive; });
// const activeJobs = jobs.filter(jobs => jobs.isActive);
// console.log(activeJobs);


// -> Arrow functions with this keyword

// const person = {
//     talk() {
//         var self = this;
//         setTimeout (function() {
//             console.log("self", self);
//         }, 1000);
//     }
// };

// person.talk();

// const person = {
//     talk() {
//         var self = this;
//         setTimeout (() => {
//             console.log("this", this);
//         }, 1000);
//     }
// };

// person.talk();

concatArrays = (array1, array2, string) =>  [...array1, ...array2, 'H', 'e', 'l', 'l', 'o'];

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'hello'));