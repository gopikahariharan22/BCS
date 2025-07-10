// //

// function packBag(owner = "Anon", ...items){
//     return " Natasha's bag contains: 💄, 🔫"
// }

// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());

// //Output
// // 🎒 Natasha's bag contains: 💄, 🔫
// // 🎒 Anon's bag is empty.

/*

function packBag(owner = "Anon", ...items) {
  if (items.length === 0) {
    return `🎒 ${owner}'s bag is empty.`;
  }
  return `🎒 ${owner}'s bag contains: ${items.join(', ')}`;
}

// 🛠️ Setup Code
console.log(packBag("Natasha", "💄", "🔫")); 
// 🎒 Natasha's bag contains: 💄, 🔫

console.log(packBag());
// 🎒 Anon's bag is empty. */

function packBag(owner = "Anon" , ...items){
    // Early Return
    // Edge Case / Corner Case
    if (items.length === 0){
        return `🎒 ${owner}'s bag contains ${items}`
    }
    // general case
    return ` 🎒 ${owner}'s bag is empty`
}

console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag());



