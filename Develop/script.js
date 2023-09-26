// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

/*function validate() {
  if (newPass.length < 8) {
    prompt("Password must be 8-128 characters and include valid character types")
  } else if (newPass.length > 128) {
    prompt("Password must be 8-128 characters and include valid character types")
  }
}
*/

function verifyLength(passLength) {
  if (passLength.length > 8 && passLength < 128) {
    return true;
  } else {
    return false;
  };
}

// Function generates new password
function generatePassword() {
  var newPassword = "";
  var passLength = prompt("Choose a password with 8-128 characters")


  // sets barrier for min and max of valid characters and selects password criteria
  if (newPassword.length < 8 && passLength > 128) {
    alert("Password must be 8-128 characters and include valid character types")
  } else if (newPassword.length > 128) {
    alert("Password must be 8-128 characters and include valid character types")
  };
  
   // Generate random selection of characters 
  for (let i = 0; i < passLength; i++)
  newPassword += validChar[Math.floor(Math.random() * validChar.length)];
  //This return logs new password to window
    return newPassword; 

  //logs new password with confirmation in pop up window
    //return confirm(newPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
