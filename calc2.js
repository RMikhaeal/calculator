//Create calculator variables
let x = '0'; 
let y = '0';
let op;

//Select all elements
const operators = document.querySelectorAll(".operator");
const values = document.querySelectorAll(".value");
const clr = document.getElementById("clear");
const del = document.getElementById("del");
const eql = document.getElementById("equal");
const display = document.getElementById("current");
const upperdisplay = document.getElementById("eval");

//Calculator functions
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
  if(b == 0) {
    alert("You can't divide by 0");
    clear();
    return 0;
  }

  return a / b;
}
function operate(a, b, operator) {
  
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '\u00D7':
      return multiply(a, b);
    case '\u00F7':
      return divide(a, b);
    default:
      return null
  }
}

//Add event listeners
values.forEach(function(button) {
  button.addEventListener('onclick', value())
});
operators.forEach(function(button) {
  button.addEventListener('onclick', operator())
});
clr.addEventListener('onclick', clear());
del.addEventListener('onclick', backspace());
eql.addEventListener('onclick', equal());

//Value function to input values
function value() {
  x += this.innerHTML;
}

//Operator function to select operation
function operator() {
  op = this.innerHTML;
  y = x;
}