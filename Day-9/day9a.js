//MAP Example


const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubled = numbers.map((num) => {
    return num *2;
})



console.log(doubled);

const tripple = numbers.map(num => num * 3)

console.log(tripple);

const subract = numbers.map((num) =>{
    return num - 1;
})

console.log(subract);

const marks = [50,12,55,70,80];

const devide = marks.map((num) => {
    return num / 2;
})

console.log(devide);

// Filter Example

const eventNumber = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 ===1) 

console.log(eventNumber);
console.log(oddNumbers);

//for loop  vs fo...of vs for...in





