// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialK = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword() {

  var userSelection = '';
  var generatedPassword = '';


  var passwordLength = prompt('Choose a character length of at least 8 characters and no more than 128 characters.')



  if (8 > passwordLength) {
    alert("You must choose a number larger than 8!")
    return;
  }
  if (passwordLength > 128) {
    alert("You must choose a number smaller than 128!")
    return;
  }
  else {
    return passwordLength;
  }


  var lowercase = confirm('Do you want your password to include lowercase characters?');
  var uppercase = confirm('Do you want your password to include uppercase characters?');
  var numeric = confirm('Do you want your password to include numbers?');
  var specialChar = confirm('Do you want your password to include special characters?');

  // var passwordResult = '';
  // passwordResult += 'blah'

  // length = Number(length);

  if (lowercase) {
    userSelection = userSelection.concat(lowerCase);
  } 
  if (uppercase) {
    userSelection = userSelection.concat(upperCase);
  } 
  if (numeric) {
    userSelection = userSelection.concat(numbers);
  }
  if (specialChar) {
    userSelection = userSelection.concat(specialK);
  } 
  // else {
  //   alert('You have to choose at least one type of character!');
  // }
  console.log(userSelection);

  if (userSelection.length === 0) {
    alert('You have to choose at least one type of character!')
    // generatePassword();
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomization = Math.floor(Math.random() * userSelection.length);
    var random = userSelection[randomization];
    generatedPassword = generatedPassword.concat(random)
  }

  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
