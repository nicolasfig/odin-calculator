let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let a = 0;
let b = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    capture(button.innerHTML);
  });
});

let number = "";

function capture(pressed) {
  number += pressed;
  console.log(number);
  display.innerHTML = number;
}

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
