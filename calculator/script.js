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
  if (income <= 300000) {
    newTaxAmount = 0;
  } else if (income > 300000 && income <= 700000) {
    newTaxAmount = income * 0.05;
  } else if (income > 700000 && income <= 1000000) {
    newTaxAmount = income * 0.1;
  } else if (income > 1000000 && income <= 1200000) {
    newTaxAmount = income * 0.15;
  } else if (income > 1200000 && income <= 1500000) {
    newTaxAmount = income * 0.2;
  } else if (income > 1500000) {
    newTaxAmount = income * 0.3;
  } else {
    newTaxAmount = -1
  }
}

function oldTax() {
  income = income - totalDeductions;
  
  if (income <= 300000) {
    oldTaxAmount = 0;
  } else if (income > 300000 && income <= 600000) {
    oldTaxAmount = income * 0.05;
  } else if (income > 600000 && income <= 900000) {
    oldTaxAmount = income * 0.1;
  } else if (income > 900000 && income <= 1200000) {
    oldTaxAmount = income * 0.15;
  } else if (income > 1200000 && income <= 1500000) {
    oldTaxAmount = income * 0.2;
  } else if (income > 1500000) {
    oldTaxAmount = income * 0.3;
  } else {
    oldTaxAmount = -1
  }
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
  income = parseFloat(document.getElementById("income").value);
  totalDeductions = parseFloat(document.getElementById("totalDeductions").value);
}