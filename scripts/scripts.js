    let principal = 0;
    let interestRate = 0;
    let timesCompounded = 0;
    let term = 0;
    let amount = 0;

    const display = () => {
        let txt = document.getElementById("amount").value;
        let neudisplay = document.getElementById('neu-principal')
        neudisplay.innerHTML = '₦' + ' ' + txt;
    }

    const simpleInterest = () => {
        event.preventDefault();

        let principal = parseFloat(document.getElementById("amount").value);
        let interestRate = parseFloat(document.getElementById("rate").value)
        interestRate = interestRate / 100;
        let term = parseFloat(document.getElementById("term").value);
        let simpleInt = principal * interestRate * term;
        let amount = (principal + simpleInt).toFixed(2);

        document.getElementById("interestpayable").innerHTML = "₦" + " " + simpleInt.toFixed(2);
        document.getElementById("amountpayable").innerHTML = "₦ " + " " + amount;

    }