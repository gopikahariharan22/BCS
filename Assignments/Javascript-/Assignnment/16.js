// Bug Fix: Area of Magic Circle

/*
var radius = prompt("Enter radius:");
var area = 3.14 * radius ** 2;
console.log(area);

*/

// prompt returns a string 
// Need to convert to to Number

// Fixed program:

var radius = +prompt("Enter radius:");
var area = 3.14 * radius ** 2;
console.log(area);
