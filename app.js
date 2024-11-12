
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNumber = ""
let secondNumber = ""
let operation = ""
let currentInput = ''

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText;
    const numberValue = Number(buttonText);

    // Future logic to capture the button's value would go here...
    if (numberValue === numberValue) {  // This checks if the button clicked is a number
      currentInput = currentInput + buttonText;  // Add the number to the current input string
      display.innerText = currentInput;  // Update the display to show the current input
    }

    if (['+', '-', '*', '/'].includes(buttonText)) {
      if (firstNumber !== "") {
        operation = buttonText;
        currentInput = "";  // Reset the input for the next number
      } else {
        firstNumber = currentInput;
        operation = buttonText;
        currentInput = "";  // Reset the input for the next number
      }
      display.innerText = firstNumber + " " + operation;  // Update the display with the first number and the operator
    }

    if (buttonText === '=') {
      secondNumber = currentInput;
      let result;

      if (operation === "+") {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
      } else if (operation === "-") {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
      } else if (operation === "*") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
      } else if (operation === "/") {
        if (secondNumber === "0") {
          result = "Error";  // Prevent division by zero
        } else {
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
        }
      }

      display.innerText = result;

      // Reset all variables after the calculation
      firstNumber = result;
      currentInput = "";  // Clear the input for a new calculation
      operation = "";  // Clear the operation
    }

    // Handle the clear button (C)
    if (buttonText === 'C') {
      firstNumber = "";  // Clear the first number
      currentInput = "";  // Clear the current input
      operation = "";  // Clear the operation
      display.innerText = '0';  // Reset the display to show '0'
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
