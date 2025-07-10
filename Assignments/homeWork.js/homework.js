//1-Array.push()
// array.push() - adds the specified elements to the end of an array and returns the new length of the array.

const fruits = ["banana", "Apple", ];


console.log(fruits.push("mango","grapes"));//4
console.log(fruits);//['banana', 'Apple', 'mango', 'grapes']



//2-array.pop()
// Removes the last element from an array and returns that element. This method changes the length of the array.

const fruits1 = [];
const removedElement = fruits1.pop();
console.log(removedElement);// undifined
console.log(fruits1);  // []



// 3-array.shift()

//removes the first element from an array and returns that removed element. This method changes the length of the array.

const students = ["Gopi","mani","Arul","Veni"];
console.log(students.shift());//Gopi
console.log(students);// ['mani', 'Arul', 'Veni']

// 4-array.unshift()
//adds the specified elements to the beginning of an array and returns the new length of the array.

console.log(students.unshift("Jeevi")); //4
console.log(students);//['Jeevi', 'mani', 'Arul', 'Veni']

//5-array.slice()
//returns a part of a  array into a new array object selected from start to end (end not included)
//  where start and end represent the index of items in that array. The original array will not be modified.
let fruits3 = ["apple", "banana", "mango"]
let citrus = fruits.slice(2, 4);

console.log(citrus); // ["mango", "orange"]
console.log(fruits3); // original array untouched

//6-array.splice
//changes the contents of an array by removing or replacing existing elements and/or adding new elements
 
const months = ["January","February","March","april"];
months.splice(4 , 0 ,"may");//(index,removeCount,item1)
console.log(months); // ['January', 'February', 'March', 'april', 'may']
months.splice(1,1);
console.log(months);// ['January', 'March', 'april', 'may']-(index[1],removeCount)

//7-array.map()
//→ Creates a new array by transforming each item.

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

//8-array.filter()
//creates a new array containing only the elements from the original array that satisfy a specified condition.
//  It does not modify the original array.

const numbers4 = [1, 2, 3, 4, 5, 6, 7];
const evenNumber = numbers4.filter(num => num % 2 === 0);
const oddNumbers = numbers4.filter(num => num % 2 ===1);
console.log(numbers);
console.log(evenNumber);
console.log(oddNumbers);

//9-array.find
// returns the first element in the provided array that satisfies the provided testing function.

const array1 = [1, 12, 33, 44];

const found = array1.find(num => num > 10);
console.log(found);

//10-array.forEach
//executes a provided function once for each array element.

array1.forEach((element) => console.log(element));
months.forEach((element => console.log(element)));

//11- array-reduce
//


