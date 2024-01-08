// business logic
function add(number1, number2) {
    return number1 + number2;
  }

function mult(number1, number2) {
    return number1*number2;
}

function div(number1, number2) {
    return number1/number2;
}
  
  // user interface logic 
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  
  window.alert("Added" + add(number1, number2));
  window.alert("Multiplied" + mult(number1, number2));
  window.alert("Divided" + div(number1, number2));