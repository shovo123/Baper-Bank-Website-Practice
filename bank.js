// Step-1 : Add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function(){
    // Step-2 : Get the deposite amount inside the deposite input field
    // Always remember to use  .value to get text from an input field...
    const depositeField = document.getElementById('input-deposite');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)
    if(isNaN(newDepositeAmount)){
        alert("PLease Input A Number");
        return;
    }
    // console.log(typeof newDepositeAmount);
    // console.log(inputDeposite);
    // Step-3 : Get the current deposite total
    // For non input (element other than input , text area) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite');
    // console.log(depositeTotal);
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    // Step-4 : Calculate Deposite Value
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;
    // Step-5 : Get Balance Current Total
    const balanceAdd = document.getElementById('balance');
    const previousbalanceAddString = balanceAdd.innerText;
    const previousbalanceAdd = parseFloat(previousbalanceAddString);
    // Step-6 : Calculate Current Total Balance
    const balanceTotal = newDepositeAmount + previousbalanceAdd;
    balanceAdd.innerText = balanceTotal;
    // Step-7 : Clear the deposite field.....
    depositeField.value = '';

})