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

let num1 = 20,
  num2 = 8,
  operator = "/";

function operate(sign, x, y) {
  switch (sign) {
    case "+":
      console.log(add(x, y));
      break;
    case "-":
      console.log(sub(x, y));
      break;
    case "*":
      console.log(mult(x, y));
      break;
    case "/":
      console.log(div(x, y));
      break;
  }
}

// operate(operator, num1, num2);

const display = document.querySelector("#display");
const btns = document.querySelector(".btns");

// display.textContent = 33;

btns.addEventListener("click", (e) => {
  let value = e.target.innerText;
  display.textContent += value;
});
