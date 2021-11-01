// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
/*   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; */
  let length = document.getElementById("length").value
  let lower = document.getElementById("lowercase").checked
  let upper = document.getElementById("uppercase").checked
  let numeric = document.getElementById("numeric").checked
  let special = document.getElementById("special").checked
  console.log('Button Pressed');

  let n = 0;
  let lchar = "";
  let uchar = "";
  let nchar = "";
  let schar = "";

  console.log(`Password to be ${length} characters long`)

  if (lower === true) {
    console.log('Use lowercase letters')
    lchar = "abcdefghijklmnopqrstuvwxyz";
    n++
  }
  if (upper === true) {
    console.log('Use uppercase letters')
    uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    n++
  }
  if (numeric === true) {
    console.log('Use numbers')
    nchar = "0123456789";
    n++
  }
  if (special === true) {
    console.log('Use special characters')
    /* NEDD TO ADD " CHARACTER */
    schar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    n++
  }

  console.log(n)
  let each = Math.floor(length/n)
  let rem = length % n
  console.log(each)
  console.log(rem)
  let lcharn = "";
  let ucharn = "";
  let ncharn = "";
  let scharn = "";

  if (lower === true) {
    /* let lcharn = ""; */
    for (var i = 0; i < each; i++) {
      lcharn += lchar.charAt(Math.floor(Math.random() * lchar.length));
    }
  console.log(lcharn)
  }

  if (upper === true) {
    /* let ucharn = ""; */
    for (var i = 0; i < each; i++) {
      ucharn += uchar.charAt(Math.floor(Math.random() * uchar.length));
    }
  console.log(ucharn)
  }

  if (numeric === true) {
    /* let ncharn = ""; */
    for (var i = 0; i < each; i++) {
      ncharn += nchar.charAt(Math.floor(Math.random() * nchar.length));
    }
  console.log(ncharn)
  }

  if (special === true) {
    /* let scharn = ""; */
    for (var i = 0; i < each; i++) {
      scharn += schar.charAt(Math.floor(Math.random() * schar.length));
    }
  console.log(scharn)
  }

  let combine = lcharn.concat(ucharn, ncharn, scharn);
  console.log(combine)

  var final = combine.split('').sort(function(){return 0.5-Math.random()}).join('');
  console.log(final)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
