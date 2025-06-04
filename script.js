let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let a = 0;
let b = 0;
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    capture(button.innerHTML);
  });
});

clear.addEventListener("click", () => {
  number = "";
  display.innerHTML = number;
});

del.addEventListener("click", () => {
  number = number.substring(0, number.length - 1);
  display.innerHTML = number;
});

let number = "";

function capture(pressed) {
  if (number.length < 10) {
    number += pressed;
    display.innerHTML = number;
  }
  switch (pressed) {
    case "+":
      operator = pressed;
      number = "";
      display.innerHTML = number;
      break;
    case "-":
      operator = pressed;
      number = "";
      display.innerHTML = number;
      break;
    case "*":
      operator = pressed;
      number = "";
      display.innerHTML = number;
      break;
    case "/":
      operator = pressed;
      number = "";
      display.innerHTML = number;
      break;
    case "=":
      break;
    case ".":
      break;
  }
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

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
  }
}
