document.getElementById("btn-withdraw").addEventListener('click', function () {
    //getting withdraw amount field
    const newWithdrawamountString = document.getElementById("withdraw-field");
    const newWithdrawamount = newWithdrawamountString.value;

    //getting withdraw text field
    const previousWithdrawAmountString = document.getElementById("total-withdraw");
    const previousWithdrawAmount = previousWithdrawAmountString.innerText;
    const totalWithdraw = parseFloat(newWithdrawamount) + parseFloat(previousWithdrawAmount);
    // previousWithdrawAmountString.innerText = totalWithdraw;

    newWithdrawamountString.value = '';

    // now we will subtract balance and withdraw

    //get balance current total

    const balanceTotalElement = document.getElementById('current-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (previousBalanceTotal > newWithdrawamount) {
        const currentBalanceTotal = previousBalanceTotal - newWithdrawamount;
        balanceTotalElement.innerText = currentBalanceTotal;
        previousWithdrawAmountString.innerText = totalWithdraw;
    }
    else{
        alert('Insufficient Amount');
    }
    // const currentBalanceTotal = previousBalanceTotal - newWithdrawamount;
    // balanceTotalElement.innerText = currentBalanceTotal;

})