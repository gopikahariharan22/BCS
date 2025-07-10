// Prompt for a password. If it's "Alohomora" (case-insensitive), grant access.

var password = prompt("Speak the password:");

if(password && password.toLowerCase() === "alohomora"){
    console.log("Access granted to the Chamber of Secrets.");
}
else{
    console.log("Incorrect password. 🐍");
}