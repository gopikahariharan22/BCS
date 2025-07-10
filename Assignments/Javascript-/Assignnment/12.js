// Prompt user to type a menu item. Even if they type " BuTTerBeeR ", match it correctly with available item.

var item = prompt("Enter your order:");

// Clean the input: trim spaces and convert to lowercase
var cleanedItem = item.trim().toLowerCase();

if (cleanedItem === "butterbeer") {
    console.log("One Butterbeer coming right up! 🍺");
} else if (cleanedItem === "pumpkin juice") {
    console.log("One Pumpkin Juice, fresh and cold! 🎃");
} else {
    console.log("Sorry, we don't have that item.");
}
