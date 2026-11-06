const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let firstNumber = "";
let operatorType = "";
let secondNumber = "";
let firstChoice = false;
let operatorChoice = false;
let secondChoice = false;

const buttonContainer = document.querySelector(".buttons-container");
const display = document.querySelector(".display");

buttonContainer.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return; 
  
  if (button.closest(".digit-container") && !operatorChoice)
    firstSelection(button);

  else if (button.closest(".operator-container") && firstChoice && !secondChoice)
    operatorSelection(button);

  else if (button.closest(".digit-container") && operatorChoice)
    secondSelection(button);

  else if (button.textContent.includes("=") && secondChoice)
    equate();

})

function firstSelection(button) {
  firstNumber += button.textContent;
  display.textContent = display.textContent + button.textContent;
  firstChoice = true;
}

function operatorSelection(button) {
  if (button.textContent === "=")
    return;
  operatorType = button.textContent;
  display.textContent = firstNumber + button.textContent
  operatorChoice = true;
}

function secondSelection(button) {
  secondNumber += button.textContent;
  display.textContent = display.textContent + button.textContent;
  secondChoice = true;
}

function equate() {
  firstNumberInt = parseInt(firstNumber);
  secondNumberInt = parseInt(secondNumber);
  if (operatorType === "+")
    display.textContent = add(firstNumberInt, secondNumberInt);

  if (operatorType === "-")
    display.textContent = subtract(firstNumberInt, secondNumberInt);

  if (operatorType === "*")
    display.textContent = multiply(firstNumberInt, secondNumberInt);
  
  if (operatorType === "/")
    display.textContent = divide(firstNumberInt, secondNumberInt);
}