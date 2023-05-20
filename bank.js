// Step-1 : Add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function(){
    // Step-2 : Get the deposite amount inside the deposite input field
    // Always remember to use  .value to get text from an input field...
    const inputDeposite = document.getElementById('input-deposite').value;
    // console.log(inputDeposite);
    // Step-3 : Get the current deposite total
    // For non input (element other than input , text area) use innerText to get the text
    const depositeTotal = document.getElementById('deposite');
    // console.log(depositeTotal);
    depositeTotal.innerText = inputDeposite;
})


// ------------------WITHDRAW---------------
// Step-1 : Add event listener to the Withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step-2 : Get the withdraw amount inside the withdraw input field
    // Always remember to use  .value to get text from an input field...
    const inputWithdraw = document.getElementById('input-withdraw').value;
    // console.log(inputWithdraw);
    // Step-3 : Get the current withdraw total
    // For non input (element other than input , text area) use innerText to get the text
    const withdrawTotal = document.getElementById('withdraw');
    // console.log(withdrawTotal);
    withdrawTotal.innerText = inputWithdraw;
})