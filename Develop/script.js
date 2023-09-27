// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

//verifies length of password using condition ternary operator 
function verifyLength(passLength) {
  return passLength >= 8 && passLength <= 128 ? true : false;
}

// Function generates new password
function generatePassword() {
  //Saves characters chosen by user
  var charString = "";

  //Saves new password
  var newPassword = "";

  //Prompts for user to choose password
  var passLength = prompt("Choose a password with 8-128 characters");

  //sets different character types to choose from
    var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var charNumbers = "1234567890";
    var charSymbols = "!@#$%^&*()`~{}|[]()";

  // sets confirmation for password options
  if (verifyLength(passLength)) {
    var addUpperCase = confirm("Will this password have capital letters?");
    var addLowerCase = confirm("Will this password have lowercase letters?");
    var addNumbers = confirm("Will this password have numbers?");
    var addSymbols = confirm("Will this password have symbol keys?");
  
    //**NOTE** Find code for passwords with characters removed
    //Pushes letters and symbols into charString if user chooses to include type
  if (addUpperCase) {
     charString += charUpperCase
  } else {
    return false
  }

  if (addLowerCase){
     charString += charLowerCase
  } else {
    return false
  }

  if (addNumbers) {
     charString += charNumbers
  } else {
    return false
  }

  if (addSymbols){
     charString += charSymbols
  } else {
    return false
  }
}
  
   // Generate random password based on selection of characters in array
  for (let i = 0; i < passLength; i++) {
    randPassword = Math.floor(Math.random() * charString.length)
    newPassword += charString.charAt(randPassword);
  }


  //This return logs new password to window
    return newPassword; 

  //logs new password with confirmation in pop up window
    //return confirm(newPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);