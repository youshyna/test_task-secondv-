function btnClick() {

  document.getElementById('form').addEventListener("submit", function (event) {
    event.preventDefault();
    return false;
  });

  let num1;
  let num2;
  let result;

  num1 = parseInt(document.getElementById('input1').value);
  num2 = parseInt(document.getElementById('input2').value);

  if (selectValue === "+") {
    result = parseInt(num1 + num2);

  } else if (selectValue === "-") {
    result = parseInt(num1 - num2);

  } else if (selectValue === "*") {
    result = parseInt(num1 * num2);

  } else {
    result = parseInt(num1 / num2);
  }

  if (isNaN(result)) {
    result = 'incorrect data :(';
  }
  let output = document.getElementById("result");
  output.value = result;
}

window.addEventListener("load", function init() {
  const button = document.getElementById("submit-btn");
  button.addEventListener('click', btnClick);
});

window.addEventListener('change', function setValue() {
  selectValue = document.getElementById("math").value;
});


function validation() {

  if (firstNum.value == "") {
    firstNum.setCustomValidity("Please, enter integer number!");
    firstNum.style.border = "1px solid #fd7778";

  } else {
    firstNum.setCustomValidity("");
    firstNum.style.border = "1px solid rgb(89, 199, 89)";
  }

  if (secondNum.value == "") {
    secondNum.setCustomValidity("Please, enter integer number!");
    secondNum.style.border = "1px solid #fd7778";

  } else {
    secondNum.setCustomValidity("");
    secondNum.style.border = "1px solid rgb(89, 199, 89)";
  }
}

window.addEventListener("load", function initiate() {
  firstNum = document.getElementById("input1");
  secondNum = document.getElementById("input2");
  firstNum.addEventListener("input", validation, false);
  secondNum.addEventListener("input", validation, false);
  validation();
});
