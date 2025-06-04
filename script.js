let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");

// Numbers and operator used
let a = 0;
let b = 0;
let operator = "";
// Number captured from input as string
let number = "";

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

function capture(pressed) {
  if (number.length < 10) {
    number += pressed;
    display.innerHTML = number;
  }
  switch (pressed) {
    case "+":
      captureOperator(pressed);
      break;
    case "-":
      captureOperator(pressed);
      break;
    case "*":
      captureOperator(pressed);
      break;
    case "/":
      captureOperator(pressed);
      break;
    case "=":
      if (operator !== "" && number.length > 0) {
        b = Number(number.substring(0, number.length - 1));
        number = "";
        console.log(a, b);
        operate(operator, a, b);
      }
      break;
    case ".":
      break;
  }
}

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
  if (b < 0) {
    return "ERROR";
  } else {
    return a / b;
  }
}

function captureOperator(pressed) {
  if (number.length > 0) {
    a = Number(number.substring(0, number.length - 1));
    operator = pressed;
    number = "";
    display.innerHTML = number;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}
