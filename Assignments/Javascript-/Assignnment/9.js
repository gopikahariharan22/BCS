// Ask for a number between 1–5. If it's not, show "Invalid input".

var vaultNumber = +prompt("Enter a vault number between 1 and 5:");

if (vaultNumber >= 1 && vaultNumber <= 5) {
    console.log(`Access to Vault ${vaultNumber} granted`);
} else {
    console.log("Invalid vault number.");
}
