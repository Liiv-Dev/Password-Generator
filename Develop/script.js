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

  //array of valid characters to generate
  /*
  var validChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","$","&","-","_","#","@","?", "1","2","3","4","5","6","7","8","9"];
  */

// Function generates new password
function generatePassword() {
  var newPassword = "";
  var passLength = 10;

  //Valid Characters for password
  var validChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()|!@#$&";

  // Generate random selection of characters 
  for (let i = 0; i < passLength; i++)
  newPassword += validChar[Math.floor(Math.random() * validChar.length)];

  // sets barrier for min and max of valid characters
  if (newPassword.length < 8) {
    alert("Password must be 8-128 characters and include valid character types")
  } else if (newPassword.length > 128) {
    alert("Password must be 8-128 characters and include valid character types")
  };
  
  //This return logs new password to window
    return newPassword; 

  //logs new password with confirmation in pop up window
    //return confirm(newPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
