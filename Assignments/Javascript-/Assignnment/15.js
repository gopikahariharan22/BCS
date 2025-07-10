// Prompt for temperature in °C. Warn if it's too cold (<60), too hot (>100), or just right.

// Prompt for temperature in °C
var temp = +prompt("Enter the temperature in °C:");

// Check temperature range
if (temp < 60) {
    console.log("Temp too cold! 🧊");
} else if (temp > 100) {
    console.log("Temp too hot! 🧪🔥");
} else {
    console.log("Temperature is just right. ✅");
}
