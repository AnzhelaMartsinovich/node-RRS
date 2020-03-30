const { lowerLetters, upperLetters } = require('./letters');

const caesarCipher = (strInput, shift, action) => {
  const arrInput = strInput.split('');
  const pushLetter = [];

  for (let i = 0; i < arrInput.length; i++) {
    if (lowerLetters.indexOf(arrInput[i]) > -1) {
      if (action === 'encode') {
        const position = lowerLetters.indexOf(arrInput[i]);
        let indexLetter = position + Number(shift);
        if (indexLetter > 25) {
          indexLetter = indexLetter % 26;
          pushLetter.push(lowerLetters[indexLetter]);
        } else {
          pushLetter.push(lowerLetters[indexLetter]);
        }
      }
      if (action === 'decode') {
        const position = lowerLetters.indexOf(arrInput[i]);
        let indexLetter = position - Number(shift);
        if (indexLetter < 0) {
          indexLetter = 26 + (indexLetter % 26);
          pushLetter.push(lowerLetters[indexLetter]);
        } else {
          pushLetter.push(lowerLetters[indexLetter]);
        }
      }
    } else if (upperLetters.indexOf(arrInput[i]) > -1) {
      const position = upperLetters.indexOf(arrInput[i]);
      if (action === 'encode') {
        let indexLetter = position + Number(shift);
        if (indexLetter > 25) {
          indexLetter = indexLetter % 26;
          pushLetter.push(upperLetters[indexLetter]);
        } else {
          pushLetter.push(upperLetters[indexLetter]);
        }
      }
      if (action === 'decode') {
        let indexLetter = position - Number(shift);
        if (indexLetter > 26) {
          indexLetter = 26 + (indexLetter % 26);
          pushLetter.push(upperLetters[indexLetter]);
        } else {
          pushLetter.push(upperLetters[indexLetter]);
        }
      }
    } else {
      pushLetter.push(arrInput[i]);
    }
  }

  let outputStr = '';
  for (let i = 0; i < pushLetter.length; i++) {
    if (pushLetter[i]) {
      outputStr += pushLetter[i];
    }
  }
  return outputStr;
};

module.exports = caesarCipher;
