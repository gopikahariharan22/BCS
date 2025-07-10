//Prompt for your favorite quality and match it to a house.

var trait = prompt("What quality do you value most?");

if (trait === "bravery") {
    console.log("You belong to Gryffindor!");
} else if (trait === "wisdom") {
    console.log("You belong to Ravenclaw!");
} else if (trait === "loyalty") {
    console.log("You belong to Hufflepuff!");
} else if (trait === "ambition") {
    console.log("You belong to Slytherin!");
} else {
    console.log("Wrong input");
}
