// What’s wrong with this?

/*

var name = "  Hermione ";
name.toLowerCase().trim();
console.log(name);



 i.e The String methods like toLowerCase() and trim()
 do not modify the original string,they return a new string
 in this case the modified result not saved in any variable....!!

*/

// Fixed Code

var name = "  Hermione ";
name = name.toLowerCase().trim();
console.log(name);