let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerHTML);
  });
});

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b < 0) {
    return "ERROR";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {}

function display() {}
