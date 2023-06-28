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
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function reply() {
  const fname = this.id;
  console.log(window[fname]());
}

const btns = document.querySelectorAll('button')

btns.forEach(function(button) {
  button.addEventListener('click', reply);
});