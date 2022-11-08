let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let checkMultiplesOfSeven = sevenTimesTable.every((number) => number % 7 === 0);
console.log(checkMultiplesOfSeven);

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

let checkMultiplesOfSeventySeven = seventySevenTimesTable.every(
  (number) => number % 77 === 0
);
console.log(checkMultiplesOfSeventySeven);

let rogueNumber = seventySevenTimesTable.find((number) => number % 77 !== 0);
console.log(rogueNumber);

function findRogueIndex(number) {
  return number % 77 !== 0
}
console.log(seventySevenTimesTable);
let rogueIndex = seventySevenTimesTable.findIndex(findRogueIndex);
console.log(rogueIndex);




