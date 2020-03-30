const exitCode = require('./exitCode');

module.exports = ({ shift, action }) => {
  if (shift === undefined) {
    process.stderr.write('You need to enter the number of offsets \n');
    exitCode();
  } else if (action !== 'decode' && action !== 'encode') {
    process.stderr.write('You need to enter decode/encode \n');
    exitCode();
  }
};
