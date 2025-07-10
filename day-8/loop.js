//Loops
// Repeat => Loops
// 

//Initialization :, Condition:,Increament:
for (let i = 1 ; i <= 4 ; i++ ){
    console.log("Hi");
};


const codes = [ "alpa" , "beta" , "gamma" , "peta" ];

for ( let i = 0 ; i < 4 ; i++){
    console.log(i , codes[i]);
}



// for loop - worst DX - have more control
// for...of - best DX  - 
// for...in - ok DX

// why these three - 

// object i array? - 

//task 1.1
//output
// Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters

// using for...of 



const avenger = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

/*

function printHeroLetters(marvelHeroes) {
  for (const hero of marvelHeroes) {
    
    const lettersCount = hero.length;
    console.log(`${hero} contains ${lettersCount} letters`);
  }
};

printHeroLetters(avengers);

*/




// using for loop

/*

const avengers1 = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

function printHeroLetters1(heroes) {
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    
    const lettersCount = hero.length;
    console.log(`${hero} contains ${lettersCount} letters`);
  }
}

printHeroLetters1(avengers);

*/

//using for...in

/*

function printHeroLetters3(heroes) {
  for (const index in heroes) {
    const hero = heroes[index];
    
    const lettersCount = hero.length;
    console.log(`${hero} contains ${lettersCount} letters`);
  }
}

printHeroLetters3(avengers);

*/





// task 1.2 - 

// Task 1.2 - Loop inside printCast
// printCast(avengers)

function printCast(avengers) {
  // code
  for (let avenger of avengers) {
  console.log(`${avenger} contains ${avenger.length} letters`);
  }
}

printCast(avenger);

// Task 1.3
//printPattern("❤️", 5);

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️

// function printPattern(emoji = "❤️" , howMany = 5){
//     for(let i=1; i<=howMany ;i++){
//     console.log(emoji.repeat(i));
//     }
// }

// after changing from function to Arrow

const printPattern = (emoji = "❤️" , howMany = 5) => {
    for(let i=1; i<=howMany ;i++){
    console.log(emoji.repeat(i));
    }
}

printPattern("❤️", 5);

/*
function getEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);
  return evenNumbers;
}

const nums = [80, 43, 72, 47, 20, 21];
getEvenNumbers(nums);

// Output:
// [80, 72, 20]

*/

// Task 1.4

const nums = [80, 43, 72, 47, 20, 21];

const getEvenNumbers = (nums) => {
    const evenNums = [];

    for (let num of nums){
        if(num % 2 == 0){
            evenNums.push(num);
        }
    }
    return evenNums;
}


console.log(getEvenNumbers(nums));
// Output
// [80, 72, 20];





