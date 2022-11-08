let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multipleOfThree = someNumbers.some((number) => number % 3 === 0);
let multipleOfFive = someNumbers.some((number) => number % 5 === 0);
let multipleOfSixty = someNumbers.some((number) => number % 60 === 0);
let multipleOfNinety = someNumbers.some((number) => number % 90 === 0);

console.log(multipleOfThree, multipleOfFive, multipleOfSixty, multipleOfNinety);
