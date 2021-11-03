var generateBtn = document.querySelector("#generate");
let globalpass = ""

// FILL IN #password INPUT WITH THE PASSWORD CREATED IN generatePassword 
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
  globalpass = passwordText.value;

  return globalpass;
}

// GENERATE PASSWORD
function generatePassword() {

  // JAVASCRIPT PROMPTS FOR USER INPUT
  // LENGTH CODE - AFTER PROMPT CHECK THAT n IS A NUMBER WITHIN RANGE BEFORE MOVING ON
  let length = (function ask() {
    let n = prompt('Length of Password (Must be from 8 to 128):');
    return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
  }());
  let lower = confirm("Lowercase Required? \nOK for Yes / Cancel for No");
  let upper = confirm("Uppercase Required? \nOK for Yes / Cancel for No");
  let numeric = confirm("Numeric Values Required? \nOK for Yes / Cancel for No");
  let special = confirm("Special Characters Required? \nOK for Yes / Cancel for No");

  // SET EMPTY VARIABLES
  let n = 0;
  let lchar = "";
  let uchar = "";
  let nchar = "";
  let schar = "";
  let rchar = "";

  // DETERMINE WHICH TYPES ARE NEEDED WITHIN THE PASSWORD BASED ON USER INPUT
  if (lower === true) {
    lchar = "abcdefghijklmnopqrstuvwxyz";
    rchar = rchar.concat(lchar)
    n++
  }
  if (upper === true) {
    uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    rchar = rchar.concat(uchar)
    n++
  }
  if (numeric === true) {
    nchar = "0123456789";
    rchar = rchar.concat(nchar)
    n++
  }
  if (special === true) {
    schar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    rchar = rchar.concat(schar)
    n++
  }
  if (n === 0) {
    alert('You must select at least one of the options')
  }

  // HOW MANY OF EACH TYPE TO ADD - HOW MANY LEFT OVER
  let each = Math.floor(length/n)
  let rem = length % n
  
  // SET EMPTY VARIABLE FOR EACH TYPE TO BE RANDOMLY PULLED INTO
  let lcharn = "";
  let ucharn = "";
  let ncharn = "";
  let scharn = "";
  let remn = "";

  // PULL RANDOM CHARACTERS FROM EACH STRING THAT IS BEING USED
  if (lower === true) {
    for (var i = 0; i < each; i++) {
      lcharn += lchar.charAt(Math.floor(Math.random() * lchar.length));
    }
  }
  if (upper === true) {
    for (var i = 0; i < each; i++) {
      ucharn += uchar.charAt(Math.floor(Math.random() * uchar.length));
    }
  }
  if (numeric === true) {
    for (var i = 0; i < each; i++) {
      ncharn += nchar.charAt(Math.floor(Math.random() * nchar.length));
    }
  }
  if (special === true) {
    for (var i = 0; i < each; i++) {
      scharn += schar.charAt(Math.floor(Math.random() * schar.length));
    }
  }
  if (rem !== 0) {
    for (var i = 0; i < rem; i++) {
      remn += rchar.charAt(Math.floor(Math.random() * rchar.length));
    }
  }

  // COMBINE ALL TYPES THAT NEED TO BE USED IN THE PASSWORD
  let combine = lcharn.concat(ucharn, ncharn, scharn, remn);

  // RANDOMIZE PASSWORD STRING THAT WAS COMBINED
  let final = combine.split('').sort(function(){return 0.5-Math.random()}).join('');

  return final;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// COPY THE PASSWORD TO THE CLIPBOARD
function copyPassword() {

  navigator.clipboard.writeText(globalpass);
  if (globalpass === "") {
    alert("You Must Generate a Password First")
  } else {
    alert(`Copied The Password: \n\n${globalpass} \n\nTo The Clipboard`);
  }
}