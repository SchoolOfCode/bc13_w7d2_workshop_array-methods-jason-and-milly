const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];


// 6a sort brooms in the broomCupboard

const sortedBroomCupboard = broomCupboard.sort((a,b)=> a-b);
console.log(sortedBroomCupboard);

// 6b sort the objects by the value of their shelf key

const sortedPotions = potions.sort((a,b)=> a.shelf-b.shelf);
console.log(sortedPotions);

// 6c sort students by their last name
const studentArr = students.map(student => {
  let eachStudent = student.split(' ');
  return {firstName : eachStudent[0], lastName : eachStudent[1]};

}).sort((a,b) => a.lastName > b.lastName ? 1 : -1 )
console.log(studentArr);


