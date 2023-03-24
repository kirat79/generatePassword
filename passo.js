const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
exports.generatePassword1=generatePassword;
function generatePassword(length, includeNumbers, includeSymbols,includeUppercase,includeLowercase) {
  let initialSet=''

  if(includeLowercase){
    initialSet+='abcdefghijklmnopqrstuvwxyz'
  }
  if(includeUppercase){
    initialSet+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (includeNumbers) {
    initialSet += '0123456789';
  }
  if (includeSymbols) {
    initialSet+= '!@#$%^&*()_+-=[]{}|;:,.<>/?';
  }
  
  let password = '';
  if (initialSet.length!==0){
  for (let i = 0; i < length; i++) {
  
    const randomIndex = Math.floor(Math.random() * initialSet.length);
    password += initialSet[randomIndex];
    }}
    else{
       password+='Select atleast one category!     ,TRY AGAIN :)'
       
    }
  
  return password;
}
exports.pass2=pass1
function pass1(){

  
  read.question('Enter the length of the password: ', length => {
    length = parseInt(length);
    read.question('Include Lowercase alphabets? (y/n): ', includeLowercase => {
      includeLowercase = includeLowercase.toLowerCase() === 'y';
      read.question('Include Uppercase alphabets? (y/n): ', includeUppercase => {
        includeUppercase = includeUppercase.toLowerCase() === 'y';

    read.question('Include numbers? (y/n): ', includeNumbers => {
      includeNumbers = includeNumbers.toLowerCase() === 'y';
      read.question('Include symbols? (y/n): ', includeSymbols => {
        includeSymbols = includeSymbols.toLowerCase() === 'y';
       const password = generatePassword(length, includeNumbers, includeSymbols,includeLowercase,includeUppercase);
        console.log(`Your password is: ${password}`);
        read.close();
      });
    });
  });
});
  });
}
pass1();