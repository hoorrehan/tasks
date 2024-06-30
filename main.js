import chalk from 'chalk';
// 1) string equally and inequality.
// Check if two given string are equal or not.
// Ensure there is one of test that should return true and aother that should return false.
console.log(chalk.bold.black("\n\t string equality test \t\n"));
let word1 = "Heaven";
let word2 = "Hell";
console.log(chalk.red("Heaven is equal to Hell"));
console.log(word1 === word2);
console.log(chalk.green("Heaven is not equal to Hell"));
console.log(word1 !== word2);
// 2) using lowerCase fnction:
// Convert a given string to lowerCase and compare it another lowerCase string.
// Write at least one test that should return true and another thant should return false.
console.log(chalk.bold.black("\n\t using lowerCase function \n\t"));
let fullName = "daffodils";
console.log(fullName.toLowerCase() === "daffodils");
console.log(chalk.green("daffodils")); //true
console.log(fullName.toLowerCase() === "DAFFODILS");
console.log(chalk.red("DAFFODILS"));
// 3) Numericals comparisons:
// perform equality and inequality checks on given number.
// Include test to check if one number is greater than , less than , greater than or equal to ,less than or equal to another.
// Atleast one test should yeild a true result and another should false.
console.log(chalk.bold.black("\n\t Numerical comparisons \n\t"));
console.log("Greater than test");
let counting1 = 20;
let counting2 = 10;
console.log("20 is > 10");
console.log(counting1 > counting2);
console.log("10 is > 20");
console.log(counting2 > counting1);
console.log("less than test");
console.log("20 < 10");
console.log(counting1 < counting2);
console.log("10 < 20");
console.log(counting2 < counting1);
console.log("20 is equal to 10");
console.log(counting1 == counting2);
console.log("20 is not equal to 10");
console.log(counting1 !== counting2);
// 4) logical operator:
// test with logical "and" to ensure two conditions are both true.
// test with logical "or" to ensure at least one condition is true.
// Ensure you have test that return both true and false.
console.log(chalk.bold.black("\n\t Logical operators test\t\n"));
let language1 = "typescript";
let language2 = "pythone";
if (language1 == language2 && language2 !== language1) {
    console.log(chalk.green("that is true condition"));
}
else {
    console.log(chalk.red("that is false condition"));
}
if (language1 == language2 || language2 !== language1) {
    console.log(chalk.green("that is true condition"));
}
else {
    console.log(chalk.red("that is false condition"));
}
// 5) Checking Items in a Array:
// Given an Array of items, test if a specific item is in the array.
// Have one test that should return true and another that should return false
console.log(chalk.bold.black("\n\t checking item in array test \t\n"));
let planets = ["Mercury", "Venus"];
if (planets.includes("Mercury")) {
    console.log(chalk.green("True! this is planet is in array"));
}
else {
    console.log("False! this planet is not in array");
}
if (planets.includes("Mars")) {
    console.log("True! this is planet is in array");
}
else {
    console.log(chalk.red("False! this planet is not in array"));
}
// 6) Checking Items not in Array:
// Test if a specific item is not in a Array.
// Include one test returing True and one returning False.
console.log(chalk.bold.black("\n\t checking item is not in array"));
let planet = ["jupiter", "saturn"];
if (planet.includes("earth")) {
    console.log("true is planet is not in array");
}
else {
    console.log(chalk.red("false this planet in array"));
}
if (planet.includes("sun")) {
    console.log("False this planet is not in array");
}
else {
    console.log(chalk.green("True this planet is not in array"));
}
