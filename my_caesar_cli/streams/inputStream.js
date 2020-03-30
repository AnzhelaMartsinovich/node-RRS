const fs = require('fs');
const exitCode = require('./../helpers/exitCode');

function input_stream(path) {
  // eslint-disable-next-line no-sync
  const existsSyncPath = fs.existsSync(path);
  if (path === undefined) {
    path = 'undefined';
  }
  const truePath = path.substr(path.length - 4);

  if (existsSyncPath && truePath === '.txt') {
    return fs.createReadStream(`./${path}`, 'utf8');
  } else if (!existsSyncPath && truePath === '.txt') {
    process.stderr.write('Input file/path was not found, try again \n');
    exitCode();
  } else {
    process.stdout.write('Your line: ');
    return process.stdin;
  }
}

module.exports = input_stream;
