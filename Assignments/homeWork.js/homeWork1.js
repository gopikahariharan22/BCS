// prompt.lowerCase,UpperCase

// const userName = prompt("Please enter yourname:");
// const lowerCaseName = userName.toLowerCase();
// const upperCaseName = userName.toUpperCase();
// console.log(lowerCaseName);
// console.log(upperCaseName);

//promptr

// const suitVersion = prompt("Tony!, Enter suitversion:")
// console.log(typeof suitVersion);

// const numericVersion = Number(suitVersion);
// console.log(typeof numericVersion);



// const sound = prompt("Enter a sound Effect:");

// console.log(sound.repeat(3));

// const starkBalance = prompt("enter stark wallet balance");
// const starkbalance1 = prompt("enter stark wallet balance:");

// const numstarkBalance = Number(starkBalance);
// const numstarkBalance1 = Number(starkbalance1);

// const totalStarkBalance = numstarkBalance + numstarkBalance1;

// console.log(`Your total stark balance is ${totalStarkBalance}`);

// const tempCelsius = prompt("Enter shiel's temperature in celsius:");
// const temp = Number(tempCelsius);

// if(temp>120){
//     console.log("Overheat!");
// }else if(temp<-10){
//     console.log("Frozen");
// }else{
//     console.log("stable");
// }

// const powerLevel = +prompt("Enter power level:");

// if(powerLevel>90){
//     console.log("excellent");
// }else if(powerLevel>=60){
//     console.log("potent");
// }else{
//     console.log("weak");
// }

// const name = prompt("Enter namer:");
// const cleanName = name.trim().toLowerCase();
// const email = `${cleanName}@starkindustries.com`;
// console.log(email);

// const code = +prompt("enter code;");

// if(code == 1700){
//     console.log("override");
// }else if(code>=1000 && code<=1999){
//     console.log("access granted")
// }else{
//     console.log("acess denied");
// }

// Prompt for speeds
let speedQuick = +(prompt("Enter Quicksilver's speed (km/h):"));
let speedHawk = +(prompt("Enter Hawkeye's speed (km/h):"));

// Compare speeds
if (speedQuick > speedHawk) {
  let diff = speedQuick - speedHawk;
  console.log(`Quicksilver is faster than Hawkeye by ${diff} km/h.`);
} else if (speedHawk > speedQuick) {
  let diff = speedHawk - speedQuick;
  console.log(`Hawkeye is faster than Quicksilver by ${diff} km/h.`);
} else {
  console.log("Quicksilver and Hawkeye have the same speed.");
}
