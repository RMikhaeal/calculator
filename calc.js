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
    return;
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
  }
}

//Create calculator variables
let x = '0'; 
let y = '0';
let op;

//Respond to button click
function reply() {
  const fname = this.innerHTML;
  
  if(fname == '=') {
    if(op == undefined) {
      upperdisplay.innerHTML = x + ' =';
      return;
    }
    calculate();
    console.log(x, y, op);
    return;
  } else if(fname == 'CLEAR') {
    clear();
    console.log(x, y, op);
    return;
  } else if(fname == 'DELETE') {
    dlt();
    console.log(x, y, op);
    return;
  }

  assign(fname);
}

function calculate() {  
  upperdisplay.innerHTML = x + ' ' + op + ' ' + y + ' ='; 
  x = operate(Number(x), Number(y), op).toString();
  y = '0';
  op = 'equal';
  display.innerHTML = x;
}

//Assign values to variables
function assign(name) {
  if(isNaN(name)) {
    if(op != undefined && op != 'equal') {
      calculate();
      upperdisplay.innerHTML = x + ' ' + op;
    }
    op = name;
    console.log(x, y, op);
    upperdisplay.innerHTML = x + ' ' + op;
    display.innerHTML = y;
    return;
  }

  if(op != undefined && op != 'equal') {
    y != '0' ? y += name : y = name;
    display.innerHTML = y;
  } else if(op == undefined || op == 'equal') {
    if(op == 'equal'){
      op = undefined;
      x = '0';
      upperdisplay.innerHTML = '';
    }
    x != '0' ? x += name : x = name;
    display.innerHTML = x;
  }

  console.log(x, y, op);
}

function clear() {
  x = '0';
  y = '0';
  op = undefined;
  display.innerHTML = x;
  upperdisplay.innerHTML = '';
}

function dlt() {
  if(y != '0') {
    y = y.slice(0, -1);
    display.innerHTML = y;
    if(y.length == 0) {
      y = '0';
      display.innerHTML = y;
    }
  } else if(op != undefined && op != 'equal' && y == '0') {
    op = undefined;
    upperdisplay.innerHTML = '';
    display.innerHTML = x;
  } else if((op == undefined || op == 'equal') && y == '0') {
    x = x.slice(0, -1);
    if(x.length == 0) {
      x = '0';
    }
    display.innerHTML = x;
    upperdisplay.innerHTML = '';
  }
}

//Add click listener to all buttons
const btns = document.querySelectorAll('button')

btns.forEach(function(button) {
  button.addEventListener('click', reply);
});

const display = document.getElementById("current");
const upperdisplay = document.getElementById("eval");