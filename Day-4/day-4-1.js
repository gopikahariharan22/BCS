
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

// Task 3.2 -  - TextCase -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?:     stRawberry
// We ran out of strawberry





var stock1 = "Vannila"
var stock2 = "chocolate"
var stock3 = "butterscotch"
var stock4 = "cottoncandy"

var userinput = window.prompt("Please Enter your favorite Icecream:").trim().toLowerCase;



if (stock1 == userinput){
    console.log(`yes ${userinput} is available...!!!`);
}

else if (stock2 == userinput){
    console.log(`yes ${userinput} is available...!!!`)
}
else if (stock3 == userinput){
    console.log(`yes ${userinput} is available...!!!`)
}
else if (stock4 == userinput){
    console.log(`yes ${userinput} is available...!!!`)
}
else{`No! we run out of ${userinput}`}







