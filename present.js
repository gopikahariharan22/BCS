// //Array
// // create an array
// //Array
// /*

// let fruits = ["apple", "banana", "orange"];

// // push element in array
// //add element
// fruits.push("pappaya");
// console.log(fruits);
// console.log(fruits.length);

// //accesst element  by index
// console.log(fruits[1]);
// console.log(fruits[2]);

// //modify element

// fruits[1] = "Grapes"
// console.log(fruits);

// object 
// /*
// let person = {
//   name: "John",
//   age: 30,
//   isStudent: false
// };
// person.age = 25
// person.name = "Kennady";
// person.isStudent = true;
// console.log(person);

// console.log(person);
// */
// //other
// /*
// const marks = [80,90,45,33,77];

// marks[0] = 100;

// console.log(marks)

// console.log(marks.length);
// */

// const movies = ["appa,", "baba", "coco", "dada"];

// const numbers = [1, 2, 3, 4, 5];
// movies.map()

// // const mergedArray = movies.concat(numbers);
// // console.log(mergedArray);

// // console.log(numbers.reverse());

// // console.log(movies.reverse());

// const sliced = movies.slice(1,3);

// console.log(sliced);



// // console.log(movies.splice(0,1))

// // movies.push("Gopika","Hari","Lala");
// // console.log(movies);
// // movies.unshift("J","jj");
// //  console.log(movies);

// //  console.log(movies.shift());
// //  console.log(movies.pop());





// //push/pop
// //unshift/shift

// // push adds elements to the end of the array
// // unshift adds elements to the beginning of the array
// // pop removes the last element from the array
// // shift removes the first element from the array
// // splice removes elements from the array at a specific index
// // slice creates a new array with a portion of the original array
// // indexOf returns the index of the first occurrence of an element in the array
// // lastIndexOf returns the index of the last occurrence of an element in the array
// // includes checks if an element is present in the array
// // find returns the first element that satisfies a condition
// // findIndex returns the index of the first element that satisfies a condition
// // filter creates a new array with all elements that satisfy a condition
// // map creates a new array with the results of calling a function on every element in the array
// // reduce applies a function against an accumulator and each element in the array to reduce it to a single value
// // forEach executes a provided function once for each array element
// // sort sorts the elements of an array in place and returns the sorted array
// // reverse reverses the elements of an array in place and returns the reversed array
// // join joins all elements of an array into a string
// // toString converts an array to a string
// // concat merges two or more arrays
// // flat flattens nested arrays into a single array
// // flatMap maps each element using a mapping function and then flattens the result into a new array
// // every tests whether all elements in the array pass the test implemented by the provided function
// // some tests whether at least one element in the array passes the test implemented by the provided function
// // includes checks if an array includes a certain value among its entries
// // indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present
// // lastIndexOf returns the last index at which a given element can be found in the array, or -1 if it is not present
// // find returns the value of the first element in the array that satisfies the provided testing function
// // findIndex returns the index of the first element in the array that satisfies the provided testing function
// // reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// // reduceRight applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
// // fill fills all elements of an array from a start index to an end index with a static value
// // copyWithin shallow copies part of an array to another location in the same array and returns it
// // entries returns a new Array Iterator object that contains the key/value pairs for each index in the array
// // keys returns a new Array Iterator object that contains the keys for each index in the array
// // values returns a new Array Iterator object that contains the values for each index in the array
// // toLocaleString returns a string representing the elements of the array
// // toLocaleString converts an array to a string, using locale-specific conventions
// // toString converts an array to a string
// // from creates a new array from an array-like or iterable object
// // of creates a new array from a variable number of arguments
// // isArray checks if the provided value is an array
// // isArray checks if the provided value is an array
// // from creates a new array from an array-like or iterable object
// // of creates a new array from a variable number of arguments
// // isArray checks if the provided value is an array


const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];

const mergedArray = [...orders,...moreOrders];

console.log(mergedArray);

const names = mergedArray.map(order => order.dishName);

console.log(names);

const ids = mergedArray.map(order => order.id);

console.log(ids);

const rating = mergedArray.map(order => order.ratings);

console.log(rating);

console.log(rating.flat());

