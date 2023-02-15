//add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //to check if system working we used console log
    // console.log("submit button clicked");
    //step 2 get the email address inside the email input field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    // step 3 get password
    // 3. a : set id on the html element
    // 3. b : get element
    // 3. a : get the value from the element
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;
    //Danger : Do not verify email and password on client side. just for understanding we will see this today.
    // verify email and password
    if(emailValue === 'sontan@bap.com' && passwordValue === 'bangladesh'){
        window.location.href = 'bank.html';
    }
    else{
        alert('use this email @ password: email: sontan@bap.com, password: bangladesh');
    }
});