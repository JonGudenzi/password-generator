
// confirming (option) variables
var howMany;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
    
// variables - Options from the prompts
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower case
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//upper case
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// concat combinations of arrays
// two way combos
charNum = character.concat(number);
charLower = character.concat(lower);
charUpper = character.concat(upper);

numChar = number.concat(character);
numLower = number.concat(lower);
numUpper = number.concat(upper);

lowerChar = lower.concat(character);
lowerNum = lower.concat(number);
lowerUpper = lower.concat(upper);

upperChar = upper.concat(character);
upperNum = upper.concat(number);
upperLower = upper.concat(lower);
// three way combos
charNumLower = character.concat(number, lower);
charLowerUpper = character.concat(lower, upper);
charNumUpper = character.concat(number, upper);
numLowerUpper = number.concat(lower, upper);
// 4 way combo
charNumLowerUpper = character.concat(number, lower, upper);

///////////////////////////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  
  // var passwordText = document.querySelector("#password");
  // var password = generatePassword();
  

  // passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


////////////////////////////////////////////////////////////////////////////////////
function writePassword(){




    confirmNumber = confirm("Do you want the password to have numbers?");
    confirmCharacter = confirm("Do you want the password to have characters?");
    confirmUppercase = confirm("Do you want the password to have uppercase letters?");
    confirmLowercase = confirm("Do you want the password to have lowercase letters?");


// All possible ways the user can choose. ! In front of variable means false instead of true.
    // chose none
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You have to choose at least one type");
  }

  // chooses all
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = charNumLowerUpper;
  }
  // chooses 3 ways
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = charNumUpper;
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = charNumLower;
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = charLowerUpper;
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numLowerUpper;
  }
  // chooses 2 ways
  else if (confirmCharacter && confirmNumber) {
      choices = charNum;
  } 
  else if (confirmCharacter && confirmLowercase) {
      choices = charLower;
  }
  else if (confirmCharacter && confirmUppercase) {
      choices = charUpper;
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowerNum;
  }
  else if (confirmLowercase && confirmUppercase) {
      choices = lowerUpper;
  }
  else if (confirmNumber && confirmUppercase) {
      choices = numUpper;
  }
  // chose 1 kind
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmUppercase) {
    choices = upper;
  }
  else if (confirmLowercase) {
      choices = lower;
  }
};