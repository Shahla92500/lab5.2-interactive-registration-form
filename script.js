// Select all necessary DOM elements (form, inputs, error message spans).
const regForm = document.getElementById("registrationForm");
const userName = document.getElementById('username');
const msgErrUNm = document.getElementById("usernameError");

const userEmail = document.getElementById('email');
const msgErrEml = document.getElementById("emailError");

const userPW = document.getElementById('password');
const msgErrPW = document.getElementById("passwordError");

const userCfmPW = document.getElementById('confirmPassword');
const msgErrCfmPW = document.getElementById("confirmPasswordError");

// On page load, check if a username is saved in localStorage. If so, pre-fill the username field.
document.addEventListener('DOMContentLoaded', () => {

  const userSaved = localStorage.getItem('userName');
  const emailSaved = localStorage.getItem('userEmail')
  if (userSaved) { 
    userName.value = userSaved; 
    console.log(`username from storage :  , ${userName.value}`);
  }
  if (emailSaved){
    userEmail.value = emailSaved;
    console.log(`emal from storage :  , ${userEmail.value}`);

  }

});

regForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    console.log(`username: ${userName.value}, Password: ${userPW.value}, Email: ${userEmail.value}`);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", userPW.value);
    localStorage.setItem("passwordConfirmation", userCfmPW.value);
    localStorage.setItem("userEmail",userEmail.value);

    checkUserName();
    checkEmail();
    checkPassword();

});
// check UserName (un= User Name)
function checkUserName(){
    userName.setCustomValidity("");
    if (userName.value.length <3) {
        userName.setCustomValidity(`The lenght of User name (,${userName.value},) should. be at least 3`);
        console.log(`Username, ${userName.value}, length: ${userName.value.length}`);
    }
    msgErrUNm.textContent = userName.validationMessage;
}
// check email
function checkEmail(){
    userEmail.setCustomValidity ('');
    if (userEmail.validity.valueMissing) {
        userEmail.setCustomValidity('We need your email address to contact you!');
        console.log(userEmail.validationMessage);
    } else if (userEmail.validity.typeMismatch || !userEmail.validity.valid) {
        userEmail.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
        console.log(userEmail.validationMessage);
    }
    msgErrEml.textContent = userEmail.validationMessage;
    console.log(msgErrEml.textContent);
}

// check password matching (pw=userPW & pwc = msgErrCfmPW)
function checkPassword() {
     userPW.setCustomValidity('');

    if (userPW.validity.valueMissing) {    
        userPW.setCustomValidity('Password is required.');
    } else if (userPW.validity.tooShort) {
        userPW.setCustomValidity(`At least ${userPW.minLength} characters.`);
    } else if (userPW.validity.patternMismatch) {
        userPW.setCustomValidity('Use upper, lower, number, and symbol.');
    }
    msgErrPW.textContent = userPW.validationMessage;
    // console.log("error msg,",  msgErrPW.textContent);
    userCfmPW.setCustomValidity('');
    // console.log(`pw, ${userPW.value}, pwc: ${userCfmPW.value}`);
    if (userPW.value && userCfmPW.value && userPW.value !== userCfmPW.value){
        userCfmPW.setCustomValidity('Password does not match to confirmation password');
    // console.log(`not match, ${userPW.value}, pwc: ${userCfmPW.value}`);
    } else {
        // console.log(`matches: pw, ${userPW.value}, pwc: ${userCfmPW.value}`);
        userCfmPW.setCustomValidity('');
        msgErrCfmPW.textContent = '';
    }

    msgErrCfmPW.textContent = userCfmPW.validationMessage;
    // console.log("error msg,",  msgErrCfmPW.textContent);
}
