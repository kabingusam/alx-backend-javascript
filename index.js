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

// function handleResponseFromAPI(promise) {
//    const promise = new Promise((resolve, reject) => {
//     if(promise = true) {
//         resolve({
//             status: 200,
//             body: 'Success'
//         })
//     } else {
//         reject({

//         })
//     }
//    }) 
// }

// handleResponseFromAPI(Promise).then(() => {
//     console.log('Got a response from the API');
// })

const companies =  [
    { name: 'company one', category: 'tech', start: 2001, end: 2003 },
    { name: 'company two', category: 'finance', start: 2001, end: 2008 },
    { name: 'company three', category: 'agri', start: 2006, end: 2009 },
];

const ages = [12, 23, 34, 56, 67, 78];

// for (i = 0; i < companies.length; i++ ){
//     console.log(companies[i]);
// }

// companies.forEach(function(company){
//     console.log(company);

// });

// let canDrink = []
// for(let i = 0; i < ages.length; i++ ){
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true
//     } 
// });

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const techCompaines =  companies.filter(function(company){
//     if(company.category === 'tech'){
//         return true
//     }
// })

// const techCompaines = companies.filter(company => company.category === 'tech')

// console.log(techCompaines)

// Create an array of company names 

// const companyNames = companies.map((company => company.name, `[${company.start} - ${company.end}]`));
// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name}, [${company.start} - ${company.end}]`
// }
// );


// const testMap = companies.map(company => `${company.name}, [${company.start} - ${company.end}]`);
// console.log(testMap);

// const ageSquareRoot = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(ageSquareRoot);

// const sortedCompanies  =  companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
// console.log(sortedCompanies);

// const sortAges =  ages.sort((a, b ) => a - b);
// console.log(sortAges);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);


// Typed arrays

// let buffer = new ArrayBuffer(16);

// let dv1 = new DataView(buffer)
// let dv2 = new DataView(buffer, 10, 3)

// dv1.setInt8(11, 42);
// let num = dv2.getInt8(1);
// console.log(num);



// weakset

// let carWeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }

// carWeakSet.add(car1);

// console.log(carWeakSet);