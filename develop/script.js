// Assignment Code
//code for red button in the browser
var generateBtn = document.querySelector("#generate");

var password = "";
//arrays for password criteria 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//Declaration variables
var plength
var yesLowercase
var yesUppercase
var yesNumeric
var yesSpecialchars
var newLength
var choices

function getPasswordOptions() {
//1. prompt user for password criteria
var plength = (prompt("Choose a password length between 8 and 128 chracters."));
//  a. password length 8 < 128
if (!plength <= 8 && !plength >= 128) {
  alert("Password must be bewtween 8 and 128 characters.\nPlease try Again.")
} else {
  newLength = alert("Your password will be " + plength + " characters long.");
}
//  b. lowercase, uppercase, numbers, special characters
var yesLowercase = (confirm("Click OK to include lowercase letters in your password"));
var yesUppercase = (confirm("Click OK to include uppercase letters in your password"));
var yesNumeric = (confirm("Click OK to include numbers in your password."));
var yesSpecialchars = (confirm("Click OK to include special characters in your password"));

var allChoices = [yesLowercase, yesUppercase, yesNumeric, yesSpecialchars];
//2. Validate the input by 1 criteria
if (allChoices === false) {
  alert("Password must contain at least one character type must be included.")
} 
}

function getRandom () {
  //3. Generate password
  var x = Math.random() * 9;
  console.log(x); 
} 
function generatePassword() {
    //4. Diplay password to the box on the page
  }

  // Write password to the #password input
  //create generatePassword function
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //displays password on screen
    passwordText.value = password;
  }

  // Add event listener to generate button
  //calls function
  generateBtn.addEventListener("click", writePassword);


