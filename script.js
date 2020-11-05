// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword(){
  
 var howmany = prompt ("How many characters would you like to use for your password?")
   if (howmany > 8 && howmany < 128) {
    var lowerCase = confirm("Would you like to use lower case letters?");

    var upperCase = confirm("Would you like to use upper case letters?");
 
    var specialchar = confirm("Would you like to use special Characters?");
   }

    else{
       alert("The amount of characters needs to be between 8 and 128");
    }
  
}



