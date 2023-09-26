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

//verifies length of password
function verifyLength(passLength) {
  if (passLength.length > 8 && passLength < 128) {
    return true;
  } else {
    return false;
  };
}

// Function generates new password
function generatePassword() {
  //Saves characters chosen by user
  var charGen = [];
  //Saves new password
  var newPassword = "";
  //Prompts for user to choose password
  var passLength = prompt("Choose a password with 8-128 characters");


  // sets confirmation for password options
  if (verifyLength(passLength)) {
    let addUpperCase = confirm("Will this password have capital letters?");
    let addLowerCase = confirm("Will this password have lowercase letters?");
    let addNumbers = confirm("Will this password have numbers?");
    let addSymbols = confirm("Will this password have symbol keys?");

    //sets different character types to choose from
    let validChar = {
      upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      lowerCase: ["abcdefghijklmnopqrstuvwxyz"],
      numbers: ["1234567890"],
      symbols: ["!@#$%^&*()`~{}|[]()"]
    }

    //Combines chosen letters
    if (addUpperCase) charGen.push(validChar.upperCase);
    if (addLowerCase) charGen.push(validChar.lowerCase);
    if (addNumbers) charGen.push(validChar.numbers);
    if (addSymbols) charGen.push(validChar.symbols);
  };
  
   // Generate random selection of characters 
  for (let i = 0; i < passLength; i++) {
    var randomPass = (Math.floor(Math.random() * charGen.length))
  newPassword += charGen.charAt(randomPass)}


  //This return logs new password to window
    return newPassword; 

  //logs new password with confirmation in pop up window
    //return confirm(newPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
