// Prompt for a spell name and power (number). If power ≥ 90, mark it as "Legendary", 60–89 as "Advanced", else "Basic".

// Prompt user for spell name and power
var spell = prompt("Enter the spell name:");
var power = +prompt("Enter the spell power (0–100):");

// Determine the spell level
var level;

if (power >= 90) {
    level = "Legendary";
} else if (power >= 60) {
    level = "Advanced";
} else {
    level = "Basic";
}

// Print the result
console.log(`${spell} is an ${level} spell.`);
