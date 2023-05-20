// Step-1 : Add click event handler with the submit button...
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("Clicked");
    // Step-2 : Get the email address inside the email input field
    // Always remember to use  .value to get text from an input field...
    const inputEmail = document.getElementById('email-input').value;
    // console.log(inputEmail);
    // Step-3 : Get the password inside the password input field
    const inputPassword = document.getElementById('password-input').value;
    // console.log(inputPassword);
    // Step-4 : Verify Email & Password and check valid user or not
    if(inputEmail === 'sahriarshovo816@gmail.com' && inputPassword === "1410868922"){
        // console.log("Valid User");
        window.location.href = 'bank.html';
    }
    else{
        // console.log("Invalid User");
        alert('Wrong Password && Email');
    }
})