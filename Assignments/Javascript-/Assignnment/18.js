// Ingredient Stock Checker

/* You have 4 ingredients: "eye of newt", "bat wing", "toad slime", "mandrake root". Prompt user for an ingredient and check if it’s in stock.

Avoid repeated if... use a smarter way.
*/

// Available ingredients
var ingredients = ["eye of newt", "bat wing", "toad slime", "mandrake root"];

// Prompt user for an ingredient
var input = prompt("Enter an ingredient:").toLowerCase().trim();

// Check if it's in stock

if (ingredients.includes(input)) {
    console.log(`${input} is in stock! `);
} else {
    console.log(`${input} is not available. `);
}
