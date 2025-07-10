/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n The non-negative integer.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is negative.
 */
function calculateFactorial(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Displays a message on the webpage by updating a specified HTML element.
 *
 * @param {string} elementId The ID of the HTML element to update.
 * @param {string} message The message to display.
 */
function displayMessage(elementId, message) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.textContent = message;
  } else {
    console.warn(`Element with ID "${elementId}" not found.`);
  }
}

// Example usage:
try {
  const numberToFactorial = 5;
  const factorialResult = calculateFactorial(numberToFactorial);
  displayMessage("outputArea", `The factorial of ${numberToFactorial} is: ${factorialResult}`);
} catch (error) {
  displayMessage("outputArea", `Error: ${error.message}`);
}

// Another example:
try {
  const negativeNumber = -3;
  calculateFactorial(negativeNumber); // This will throw an error
} catch (error) {
  console.error(error.message); // Log the error to the console
}