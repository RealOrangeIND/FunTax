function hideAll() {
    document.getElementById("deductions").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("investment").style.display = "none";
    document.getElementById("traps").style.display = "none";
    document.getElementById("liability").style.display = "none";
    document.getElementById("policy").style.display = "none";
    document.getElementById("treasure").style.display = "none";
    document.getElementById("start").style.display = "none";
}

function revealDeductions() {
    hideAll()
    document.getElementById("deductions").style.display = "block";
}

function revealCredit() {
    hideAll()
    document.getElementById("credit").style.display = "block";
}

function revealInvestment() {
    hideAll()
    document.getElementById("investment").style.display = "block";
}

function revealTraps() {
    hideAll()
    document.getElementById("traps").style.display = "block";
}

function revealLiability() {
    hideAll()
    document.getElementById("liability").style.display = "block";
}

function revealPolicy() {
    hideAll()
    document.getElementById("policy").style.display = "block";
}

function revealTreasure() {
    hideAll()
    document.getElementById("treasure").style.display = "block";
}

function revealStart() {
    hideAll()
    document.getElementById("start").style.display = "block";
}

document.addEventListener("DOMContentLoaded", (event) => {
    revealStart();
})