// https://www.youtube.com/watch?v=RfnH-vFseTY
const getAction = (str, shift, action) => {
  let out = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
      /* eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      action === 'encode' ? (code += Number(shift)) : (code -= Number(shift));
      out += String.fromCharCode(code);
    } else out += String.fromCharCode(code);
  }
  return out;
};

module.exports = getAction;
