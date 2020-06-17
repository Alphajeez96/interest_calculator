let principal = 0;
let interestRate = 0;
let timesCompounded = 0;
let termOfLoan = 0;
let amount = 0;

function simpleInterest() {
    event.preventDefault();
    var principal = parseFloat(document.getElementById("principalSimple").value);
    var interestRate = parseFloat(document.getElementById("interestSimple").value);
    interestRate = interestRate / 100;
    var termOfLoan = parseFloat(document.getElementById("termSimple").value);
    var simpleInt = principal * interestRate * termOfLoan;
    var amount = (principal + simpleInt).toFixed(2);
    document.getElementById("siOutput-01").innerHTML = "Interest: $" + simpleInt.toFixed(2);
    document.getElementById("siOutput-02").innerHTML = "Total plus interest: $" + amount;
}

const simpleInterest = () => {
    event.preventDefault();
}