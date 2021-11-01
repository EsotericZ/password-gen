// Assignment Code

let length = document.getElementById("length").value
let lower = document.getElementById("lowercase").checked
let upper = document.getElementById("uppercase").checked
let numeric = document.getElementById("numeric").checked
let special = document.getElementById("special").checked

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
