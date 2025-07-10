//wand core

var wandcore = window.prompt("what is your wand core?");

if (wandcore){
    console.log("LowerCase:" + wandcore.toLowerCase());
    console.log("toUppercase:" + wandcore.toUpperCase());
} else{
    console.log("No wand core Provided");
}