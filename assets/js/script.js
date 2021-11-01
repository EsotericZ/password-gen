var generateBtn = document.querySelector("#generate");

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password; 

// Write password to the #password input
function writePassword() {
  
  let length = prompt("Length of Password \nMust be between 8 and 128");
  let lower = confirm("Lowercase Required? \nOK for Yes / Cancel for No");
  let upper = confirm("Uppercase Required? \nOK for Yes / Cancel for No");
  let numeric = confirm("Numeric Values Required? \nOK for Yes / Cancel for No");
  let special = confirm("Special Characters Required? \nOK for Yes / Cancel for No");

  console.log(length);
  console.log(lower);
  console.log(upper);
  console.log(numeric);
  console.log(special);



  console.log('Button Pressed');

  let n = 0;
  let lchar = "";
  let uchar = "";
  let nchar = "";
  let schar = "";
  let rchar = "";

  console.log(`Password to be ${length} characters long`)

  if (lower === true) {
    console.log('Use lowercase letters')
    lchar = "abcdefghijklmnopqrstuvwxyz";
    rchar = rchar.concat(lchar)
    n++
  }
  if (upper === true) {
    console.log('Use uppercase letters')
    uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    rchar = rchar.concat(uchar)
    n++
  }
  if (numeric === true) {
    console.log('Use numbers')
    nchar = "0123456789";
    rchar = rchar.concat(nchar)
    n++
  }
  if (special === true) {
    console.log('Use special characters')
    /* NEDD TO ADD " CHARACTER */
    schar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    rchar = rchar.concat(schar)
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
  let remn = "";

  if (lower === true) {
    for (var i = 0; i < each; i++) {
      lcharn += lchar.charAt(Math.floor(Math.random() * lchar.length));
    }
  console.log(lcharn)
  }

  if (upper === true) {
    for (var i = 0; i < each; i++) {
      ucharn += uchar.charAt(Math.floor(Math.random() * uchar.length));
    }
  console.log(ucharn)
  }

  if (numeric === true) {
    for (var i = 0; i < each; i++) {
      ncharn += nchar.charAt(Math.floor(Math.random() * nchar.length));
    }
  console.log(ncharn)
  }

  if (special === true) {
    for (var i = 0; i < each; i++) {
      scharn += schar.charAt(Math.floor(Math.random() * schar.length));
    }
  console.log(scharn)
  }

  if (rem !== 0) {
    for (var i = 0; i < rem; i++) {
      remn += rchar.charAt(Math.floor(Math.random() * rchar.length));
    }
  console.log(remn)
  }

  console.log('remn', remn);
  let combine = lcharn.concat(ucharn, ncharn, scharn, remn);
  console.log(combine)

  let final = combine.split('').sort(function(){return 0.5-Math.random()}).join('');
  console.log(final)



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);