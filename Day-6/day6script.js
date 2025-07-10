

// const student = {

//     name: "Gopi",
//   address : {
//           city : "Triruvannamalai",
//           State: "Tamilnadu",
//     },
//   hobbies : ["chess" , "cricket" , "Dhayam"],
//  }

 

//     // address1 : ["Tamilnad", "Tiruvannamala" ]

//     console.log(student.address.city);
//     console.log(student.address.State);
//     console.log(student.hobbies);
//     console.log(student.hobbies[1]);
//     console.log(student.hobbies[2]);
//     console.log(student.hobbies[0]);
    

// // how to extract data from object  directly
// // Nested Destructuring??
//   const { name , address : {city , State} , hobbies} = student;


//     console.log(city);
//     console.log(State);
//     console.log(hobbies);
//     console.log(hobbies [0]);
//     console.log(name);

// Spread Operator

// let numbers = [ 1,2,3]
// let numbers1 = [100 , 200 , ...numbers]
// console.log(numbers1);

// combile two object

const book = {
    name1 : "Mahabaratha",
    Author : "NoIdea",
    age : 150,
};

const details = {
    year : 200,
    price : 1,
    age : 160,
}
const mergedBook = { ...details , ...book };
//const mergedBook = { ...book , ...details };

console.log(mergedBook);

// Now age should be 150 in mergedBook

// Default values (use the default value first)

// we can merge many object







