const fs = require('fs');

function outputStream(path) {
  // eslint-disable-next-line no-sync
  const existsSyncPath = fs.existsSync(path);

  if (existsSyncPath) {
    return fs.createWriteStream(`./${path}`, {
      flags: 'a'
    });
  } else if (!existsSyncPath) {
    return process.stdout;
  }

  process.stderr.write('Output file/path was not found, try again \n');
  process.on('exit', code => console.log(`Process code: ${code}`));
  const exit = process.exit;
  exit(1);
}

module.exports = outputStream;
