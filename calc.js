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
  button.addEventListener('click', value)
});
operators.forEach(function(button) {
  button.addEventListener('click', operator)
});
clr.addEventListener('click', clear);
del.addEventListener('click', backspace);
eql.addEventListener('click', equal);

//Value function to input values
function value() {
  if(this.id == 'deci' && !x.includes('.')) x += '.';
  if(this.id != 'deci') {
    x == '0' ? x = this.innerHTML : x += this.innerHTML;
  }
  screen(x);
}

//Operator function to select operation
function operator() {
  if(op != undefined && x != 0) {
      y = operate(Number(y), Number(x), op).toString();
  } else if (op === undefined) y = x;
  x = '0';
  op = this.innerHTML;
  screen(y, op);
}

//Clear all values
function clear() {
  x = '0';
  y = '0';
  op = undefined;
  screen();
}

//Clear Current Value
function backspace() {
  x = x.slice(0, -1);
  if(x.length == 0) x = '0';
  screen(x);
}

//Compute values
function equal() {
  if(op === undefined) return;
  screen(x, y, op);
  x = operate(Number(y), Number(x), op).toString();
  screen(x);
  y = '0';
  op = undefined;
}

//Update display
function screen(d1, d2, d3) {
  if(typeof d1 === 'undefined') {
    upperdisplay.innerHTML = '&nbsp';
    display.innerHTML = '0';
    return;
  } else if(typeof d2 === 'undefined') {
    display.innerHTML = d1;
    return;
  } else if(typeof d3 === 'undefined') {
    upperdisplay.innerHTML = d1 + ' ' + d2;
    display.innerHTML = '0';
    return;
  } else {
    upperdisplay.innerHTML = d2 + ' ' + d3 + ' ' + d1 + ' =';
  }
}