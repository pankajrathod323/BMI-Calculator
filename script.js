const btnEl = document.getElementById("btn");
const clearBtnEl = document.getElementById("clear-btn");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (heightValue * heightValue);
  const bmiResult = document.getElementById("bmi-result");
  bmiResult.value = bmiValue;

  const weightCondition = document.getElementById("weight-condition");
  if (bmiValue < 18.5) {
    weightCondition.innerText = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    weightCondition.innerText = "Overweight";
  } else {
    weightCondition.innerText = "Obesity";
  }
}

function clearFields() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi-result").value = "";
  document.getElementById("weight-condition").innerText = "";
}

btnEl.addEventListener('click', calculateBMI);
clearBtnEl.addEventListener('click', clearFields);
