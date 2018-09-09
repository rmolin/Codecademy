// Non changing variable for my age
const myAge = 22;

// The first two human years of a dog's life count
// as 10.5 dog years each.
let earlyYears = 2;
earlyYears = earlyYears * 10.5; //21

//
let laterYears = myAge - 2;
laterYears *= 4;

// My early dog years + later dog years
let myAgeInDogYears = earlyYears + laterYears;

// Variable with my name in lower case letters
let myName = "Ryan".toLowerCase();

// Printing a statement
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
