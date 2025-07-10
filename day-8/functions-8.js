// function
//1st  class citizen?

//function can return another function
//if function assinned to varial
//.i.e if function treated as value

//how to print Hello!

function sayHello(){
    return function(){
        console.log("Hello! 👱‍♀️");
    }
}

// anonymous function
/*
const a = sayHello();
console.log(a());
a();
sayHello()();

*/

const sayHello1 = () => () => console.log("Hello!!,");


//
const add = (x) => (y) => x + y;

const add5 = (y) => 5 + y;

console.log(add(5)(10));


//change to arrow function

// const x = () => "Hi"









