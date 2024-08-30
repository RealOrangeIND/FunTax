let income;
let taxAmount;

function testCalc() {
  initialiseValues();
  taxAmount = income + 100;
}

function update() {

  testCalc();

  document.getElementById("taxAmount").textContent = taxAmount;

  document.getElementById("resultsContainer").style.display = "block";
  console.log(income)
}

function sub() {

  if (
    income == NaN
  ) {
    alert("Please fill in all required fields with valid values.");
    return;
  }

  update();
}

function initialiseValues() {
  income = parseFloat(document.getElementById("income").value);
}