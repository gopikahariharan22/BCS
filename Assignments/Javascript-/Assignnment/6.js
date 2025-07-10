// Prompt for the height of Hagrid and Dobby. Print who is taller and by how much.

var hagridHeight = +prompt("Enter Hagrid's height in cm:");
var dobbyHeight = +prompt("Enter Dobby's height in cm:");

var difference = Math.abs(hagridHeight - dobbyHeight);

if (hagridHeight > dobbyHeight) {
    console.log(`Hagrid is taller than Dobby by ${difference}cm`);
} else if (dobbyHeight > hagridHeight) {
    console.log(`Dobby is taller than Hagrid by ${difference}cm`);
} else {
    console.log("Both are the same height!");
}
