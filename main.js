function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

let num1 = 2,
  num2 = 8,
  operator = "+";

switch (operator) {
  case "+":
    console.log(add(num1, num2));
    break;
  case "-":
    console.log(sub(num1, num2));
    break;
  case "*":
    mult(num1, num2);
    break;
  case "/":
    div(num1, num2);

  default:
    console.log("Error");
}
