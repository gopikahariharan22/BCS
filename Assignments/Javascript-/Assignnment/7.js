// Prompt user for input
var goals = +prompt("How many goals did your team score?");
var snitches = +prompt("How many snitches did your team catch?");

// Calculate total score
var totalScore = (goals * 10) + (snitches * 150);

// Determine and display result
if (totalScore >= 200) {
    console.log(`You scored ${totalScore} points and won the match! 🧹🏆`);
} else {
    console.log(`You scored ${totalScore} points. Better luck next time!`);
}
