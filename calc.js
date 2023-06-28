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
    return;
  }

  return a / b;
}

function operate(a, b, operator) {
  
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
  }
}

//Create calculator variables
let x, y, op;

//Respond to button click
function reply() {
  const fname = this.id;
  
  if(fname == 'equal') {
    x = operate(Number(x), Number(y), op).toString();
    y = undefined;
    op = undefined;
    console.log(x, y, op);
    return;
  } else if(fname == 'clear') {
    clear();
    console.log(x, y, op);
    return;
  } else if(fname == 'del') {
    dlt();
    console.log(x, y, op);
    return;
  }

  assign(fname);
}

//Assign values to variables
function assign(name) {
  if(isNaN(name)) {
    op = name;
    console.log(x, y, op);
    return;
  }

  if(op != undefined) {
    y != undefined ? y += name : y = name;
  } else if(op == undefined) {
    x != undefined ? x += name : x = name;
  }

  console.log(x, y, op);
}

function clear() {
  x = undefined;
  y = undefined;
  op = undefined;
}

function dlt() {
  if(y != undefined) {
    y = y.slice(0, -1);
    if(y.length == 0) {
      y = undefined;
    }
  } else if(op != undefined && y == undefined) {
    op = undefined;
  } else if(op == undefined && y == undefined) {
    x = x.slice(0, -1);
    if(x.length == 0) {
      x = undefined;
    }
  }
}

//Add click listener to all buttons
const btns = document.querySelectorAll('button')

btns.forEach(function(button) {
  button.addEventListener('click', reply);
});