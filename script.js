// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create 4 variables, one for each of the password types. Ex: lowercase will have abcdef.....
function generatePassword() {
  var passwordLength = parseInt(window.prompt("Select Password Length between 8 and 128 Characters"))
  
  if(typeof passwordLength !== 'number' || passwordLength < 8 || passwordLength > 128){
    alert("Password must be greater than 8 characteers or less than 128 characters")
    return;
  }

  var passwordType_lowercase = window.confirm("Do you want to include lowercase letters in your password?")
  var passwordType_Uppercase = window.confirm("Do you want to include uppercase letters in your password?")
  var passwordType_Numeric = window.confirm("Do you want to include numeric vales in your password?")
  var passwordType_specialcharacters = window.confirm("Do you want to include special characters in your password?")

  if(!passwordType_lowercase && !passwordType_Uppercase && !passwordType_Numeric && !passwordType_specialcharacters){
    alert ("One option must be selected") 
    return;
  }
  
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
 combinedcharacters()
 
  
  // Next Steps:
  // Create a variable called password Bank.
  // Look through the different passwordTypes from the user, The ones that are true, add all of those types to the character bank
  // Look through character bank to generate passworld that is the length that the user wants
  // Return that password.
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
