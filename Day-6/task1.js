// 

function checkAgeCategory(age = 18) {
  if (age < 18) {
    return "🧒 Minor";
  } else if (age >= 60) {
    return "🧓 Senior";
  } else {
    return "👨 Adult";
  }
}

// 🛠️ Setup Code
console.log(checkAgeCategory());     // 👨 Adult
console.log(checkAgeCategory(12));  // 🧒 Minor
console.log(checkAgeCategory(65));  // 🧓 Senior


