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

// concatArrays = (array1, array2, string) =>  [...array1, ...array2, 'H', 'e', 'l', 'l', 'o'];

// console.log(concatArrays(['a', 'b'], ['c', 'd'], 'hello'));

// getSanFranciscoDescription = () => {
//   const year = 2017;
//   const budget = {
//     income: '$119,868',
//     gdp: '$154.2 billion',
//     capita: '$178,479',
//   };

//  console.log( `As of   ${year}  , it was the seventh-highest income county in the United States
//          , with a per capita personal income of   ${budget.income}  . As of 2015, San Francisco
//           proper had a GDP of   ${gdp}  , and a GDP per capita of   ${budget.capita}  .`);
// }

function handleResponseFromAPI(promise) {
   const promise = new Promise((resolve, reject) => {
    if(promise = true) {
        resolve({
            status: 200,
            body: 'Success'
        })
    } else {
        reject({

        })
    }
   }) 
}

handleResponseFromAPI(Promise).then(() => {
    console.log('Got a response from the API');
})
