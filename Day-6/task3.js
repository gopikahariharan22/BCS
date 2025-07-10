// //

// function mergeInventory(existing, incoming){
//     return '"🍎", "🥪", "🍫", "🍇", "🧃"'
// }

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));

// console.log(a);
// var a = 1 ;
// console.log(a);

// function mergeInventory(existing, incoming) {
//   return [...existing, ...incoming, "🧃"];
// }

// // 🛠️ Setup Code
// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));
// // ✅ Output: ["🍎", "🥪", "🍫", "🍇", "🧃"]


function mergeInventery(shelf , delivery){
          return [...shelf , ...delivery , "🧃"];
}

const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];
console.log(mergeInventory(shelf, delivery));