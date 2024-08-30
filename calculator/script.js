let assessmentYear;
let taxpayerCategory;
let residentialStatus;
let age;
let income;
let totalDeductions;

let newTaxAmount;
let oldTaxAmount

function taxCalc() {
  if (newTaxAmount <= 0) {
    newTaxAmount = 0;
  } else {
    newTax();
  }

  if (oldTaxAmount <= 0) {  
    oldTaxAmount = 0;
  } else {
    oldTax();
  }
}

function newTax() {
  newTaxAmount = income + 100
}

function oldTax() {
  oldTaxAmount = income + 100
}

function update() {
  taxCalc();
  document.getElementById("newTaxAmount").textContent = newTaxAmount;
  document.getElementById("oldTaxAmount").textContent = oldTaxAmount;
  document.getElementById("resultsContainer").style.display = "block";
}

function sub() {
  initialiseValues();
  if (
    isNaN(income)
  ) {
    alert("Please fill in all required fields with valid values.");
    return;
  }

  update();
}

function initialiseValues() {
  assessmentYear = document.getElementById("assessmentYear").value;
  taxpayerCategory = document.getElementById("taxpayerCategory").value;
  residentialStatus = document.getElementById("residentialStatus").value;
  age = document.getElementById("age").value;
  income = parseFloat(document.getElementById("income").value);
  totalDeductions = parseFloat(document.getElementById("totalDeductions").value);
}