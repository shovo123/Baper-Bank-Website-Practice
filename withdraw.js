   // ------------------WITHDRAW---------------
// Step-1 : Add event listener to the Withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step-2 : Get the withdraw amount inside the withdraw input field
    // Always remember to use  .value to get text from an input field...
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawValueString = inputWithdraw.value;
    const withdrawValue = parseFloat(withdrawValueString) ;

    // console.log(inputWithdraw);
    // Step-3 : Get the current withdraw total
    // For non input (element other than input , text area) use innerText to get the text
    const withdrawTotal = document.getElementById('withdraw');
    // console.log(withdrawTotal);
    // withdrawTotal.innerText = withdrawValue;
    const withdrawTotalElementString = withdrawTotal.innerText;
    const withdrawTotalElement = parseFloat(withdrawTotalElementString);
  

    const finalBalance = document.getElementById('balance');
    const finalBalanceString = finalBalance.innerText;
    const finalBalanceCalculate = parseFloat(finalBalanceString);

    const finalBalanceAdd = finalBalanceCalculate - withdrawValue;
      // Step-4 : Clear the deposite field.....
      inputWithdraw.value = "";
      
    if(withdrawValue > finalBalanceCalculate){
        alert("Sorry Insufficient Amount");
            return;
    }
    const withdrawTotalAmount = withdrawValue + withdrawTotalElement;
    withdrawTotal.innerText = withdrawTotalAmount;
    finalBalance.innerText = finalBalanceAdd;

    

  
})
