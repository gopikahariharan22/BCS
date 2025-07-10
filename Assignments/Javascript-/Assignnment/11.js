// Ask for a model name and price. Convert string price input to number and add 10% tax. Print total cost.

// Ask for model name and price
var model = prompt("Enter the broom model:");
var price = +prompt("Enter the price in Galleons:");

// Calculate total cost with 10% tax
var totalCost = price * 1.10;

// Print the result
console.log(`${model} will cost you ${totalCost} Galleons (after tax).`);
