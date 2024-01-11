// Business Logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculate(number1, number2, operator) {
    if (operator === "add") {
      return add(number1, number2);
    }
    
    else if (operator === "subtract") {
      return subtract(number1, number2);
    }

    else if (operator === "multiply") {
      return multiply(number1, number2);
    }
    else if (operator === "divide") {
      return divide(number1, number2);
    }
}

// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  
  const number1 = parseInt(document.querySelector("input#number1").value);
  const number2 = parseInt(document.querySelector("input#number2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
  
  let result = calculate(number1, number2, operator);

  document.getElementById("output").innerText = result;
}

function submit() {
  const form = document.getElementById("calcForm");
  form.addEventListener("submit", handleSubmission);
}


// Add event listener

window.addEventListener("load", submit);