// Array

🔹 1. Array
✅ What is an Array?
A data structure used to store multiple values in a single variable.

Indexed collection (starts at index 0).

✅ Syntax:
javascript
Copy
Edit
let fruits = ["apple", "banana", "orange"];
✅ Key Points:
Can contain any data type: numbers, strings, objects, other arrays.

Common methods:

push() – Add to end

pop() – Remove from end

shift() – Remove from start

unshift() – Add to start

forEach() / map() – Iterate

🔹 2. Object
✅ What is an Object?
A collection of key-value pairs.

Used to represent real-world entities.

✅ Syntax:
javascript
Copy
Edit
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
✅ Key Points:
Keys are strings (or symbols), values can be any type.

Access values:

Dot notation: person.name

Bracket notation: person["age"]

🔹 3. let vs const vs var
✅ var:
Function-scoped

Can be redeclared

Hoisted (but initialized as undefined)

javascript
Copy
Edit
var x = 10;
var x = 20; // Allowed
✅ let:
Block-scoped

Cannot be redeclared in the same scope

Can be updated

javascript
Copy
Edit
let y = 10;
y = 20; // Allowed
✅ const:
Block-scoped

Cannot be redeclared or reassigned

Good for values that should not change

javascript
Copy
Edit
const z = 30;
z = 40; // ❌ Error
🔸 Note: Objects and arrays declared with const can still be modified.

javascript
Copy
Edit
const user = { name: "Alice" };
user.name = "Bob"; // ✅ Allowed
✅ Summary Table:
Feature	var	let	const
Scope	Function	Block	Block
Redeclare	✅ Yes	❌ No	❌ No
Reassign	✅ Yes	✅ Yes	❌ No
Hoisted	✅ Yes	✅ (but not initialized)	✅ (but not initialized)

Would you like a slide version, script, or Q&A prep as well?






✅ Objects with const
javascript
Copy
Edit
const person = {
  name: "Alice",
  age: 25
};

// ✅ Modifying a property
person.age = 26;

// ✅ Adding a new property
person.city = "New York";

// ❌ Reassigning the object (NOT allowed)
// person = { name: "Bob" }; // ❌ Error

console.log(person);
// Output: { name: 'Alice', age: 26, city: 'New York' }
Why?

const means the reference (pointer) to the object can’t change.

But the content inside that object can change.

✅ Arrays with const
javascript
Copy
Edit
const numbers = [1, 2, 3];

// ✅ Modifying elements
numbers[0] = 10;

// ✅ Adding elements
numbers.push(4);

// ❌ Reassigning the array (NOT allowed)
// numbers = [5, 6, 7]; // ❌ Error

console.log(numbers);
// Output: [10, 2, 3, 4]
Summary:

You can’t assign a new array or object to a const variable.

But you can change what’s inside them.

Let me know if you want a visual or slide-friendly version of this!