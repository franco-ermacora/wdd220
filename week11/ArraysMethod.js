




let names = ["Jose", "Walter", "Josh", "Clara"];

console.log(names.length)

// 4





let data = ["Jose", 2, true, false, 2.4];

console.log(data.length)

// 5



let number = [1, 2, 3, 4];

console.log(number.length)

// 4



















// Map

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(value => value * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]



const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray);
  
  
  // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  
  
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]










//REDUCE





const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10







 








// Filter

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']






function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]






  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  const result = words.filter(word => word.length > 8);
  
  console.log(result);
  // Expected output: Array ["exuberant", "destruction", "present"]





