// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasUpper = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

//Function that generates new password
function generatePassword () {
  var newPass = '12345678910';
  var passlength = 10;
  //array of vaid characters to generate
  ///var validChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","$","&","-","_","#","@","?", "1","2","3","4","5","6","7","8","9"];

  var validChar = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()|!@#$&']

  //Sets range of characters 
  if (newPass.length < 8) {
    prompt("Password must be 8-128 characters and include valid character types")
  } else if (newPass.length > 128) {
    prompt("Password must be 8-128 characters and include valid character types")
  }

  /*for (let i = 0; i < passLength; i++)
        newPass += validChar[i][Math.floor(Math.random() * validChar[i].length)];
  */
  
  return newPass;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
