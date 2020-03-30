const fs = require('fs');
const exitCode = require('./../helpers/exitCode');

function outputStream(path) {
  // eslint-disable-next-line no-sync
  const existsSyncPath = fs.existsSync(path);
  if (path === undefined) {
    path = 'undefined';
  }
  const truePath = path.substr(path.length - 4);

  if (existsSyncPath && truePath === '.txt') {
    return fs.createWriteStream(`./${path}`, {
      flags: 'a'
    });
  } else if (!existsSyncPath && truePath === '.txt') {
    process.stderr.write('Output file/path was not found, try again \n');
    exitCode();
  } else {
    return process.stdout;
  }
}

module.exports = outputStream;
