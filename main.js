const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let displayValue = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (!isNaN(buttonValue) || buttonValue === ".") {
      handleNumber(buttonValue);
    } else if (buttonValue === "C") {
      clearCalculator();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      handleOperator(buttonValue);
    }
  });
});

function handleNumber(num) {
  if (operator === "") {
    firstNumber += num;
    displayValue = firstNumber;
  } else {
    secondNumber += num;
    displayValue = secondNumber;
  }
  updateDisplay();
}

function handleOperator(op) {
  if (firstNumber !== "") {
    operator = op;
  }
}

function calculate() {
  if (firstNumber !== "" && secondNumber !== "") {
    result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    displayValue = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = displayValue;
}

function clearCalculator() {
  displayValue = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay();
}
