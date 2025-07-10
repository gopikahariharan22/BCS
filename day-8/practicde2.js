// Practice

//1.basic

// function welcome(name){
//     return `Hi ${name}`;
// }

// const welcome = function(name){
//     return `Hi ${name}`;
// }

// const welcome = (name) =>{
//     return `Hi ${name}`;
// }

// const welcome = (name) => `Hi ${name}`;

// const welcome = name => `Hi ${name}`;

// console.log(welcome("Gopika"))

// const greet = name => `Hi ${name}`

// console.log(greet('Gopika   '));
// console.log(greet('Gopika Hariharan   '))
// console.log(greet('Gopi   '))
// console.log(greet('Go   '))

let x; // variable declared but not assigned
console.log(x); //undifined
console.log(typeof undefined); //undifined
const y = true

console.log(x==y);
console.log(x===y);
console.log(typeof NaN);
console.log(typeof null);
console.log(0/0);
console.log(Math.sqrt(-4));
console.log(parseInt('Gopi'));
console.log(parseFloat("Gopika"));
console.log(parseInt(89.8999999999999999999999999));
console.log(parseFloat(34.78778788787787));

var age;
const b = age + 2;
console.log(b);

console.log(Math.sqrt(-9)); 

const greet = name => `Hello ${name} !!?`;
const result = greet("Gopika");
console.log(result);
console.log(true - false);
console.log(false / false);
console.log(NaN==NaN); //false
console.log(NaN===NaN); // false

const array = [1, 11, 22, 21, 99, 88, 77, 33];

const result1 = array.sort();
console.log(result1);

const p = {}
const q = {
    name : "Gopi",
}
const r = {
    name : "hari",
}

p[q] = {
    name : 'haran',
}
p[r] = {
    name : 'GopikaHariharan',
}

console.log(p[q]);

