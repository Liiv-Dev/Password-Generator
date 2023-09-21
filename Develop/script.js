// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasUpper = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

function validateCriteria () {
  
}

function validateLength(userLength) {
  return false;
}

function generatePassword () {
  var passlength = prompt("Enter password length 8-128 characters")
  
  console.log(passlength);

  if (validateLength(passlength)) {

  } else {
    alert("You have entered and invalid password length")
    return "";
  }
  
  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
