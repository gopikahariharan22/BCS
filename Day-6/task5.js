// //thor

// function whereAreYou(personObj){
//    return "Thor is currently in Asgard, Yggdrasil 🌍"
// }

// console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
// console.log(whereAreYou({}));

// // Thor is currently in Asgard, Yggdrasil 🌍
// // Someone is currently in Unknown, Earth 🌍

/*

function whereAreYou(personObj) {
  const {
    user = "Someone",
    location: {
      city = "Unknown",
      planet = "Earth"
    } = {}
  } = personObj;

  return `${user} is currently in ${city}, ${planet} 🌍`;
}

// 🛠️ Setup Code
console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
// Thor is currently in Asgard, Yggdrasil 🌍

console.log(whereAreYou({}));
// Someone is currently in Unknown, Earth 🌍

*/
function whereAreYou(user = "Someone", location = "Unkown" ){
         return `${user} is currently in ${location} , Earth 🌍`;
}


console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
console.log(whereAreYou());
