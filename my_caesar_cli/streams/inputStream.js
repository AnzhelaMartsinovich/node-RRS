const fs = require('fs');

function input_stream(path) {
  // eslint-disable-next-line no-sync
  const existsSyncPath = fs.existsSync(path);

  if (existsSyncPath) {
    return fs.createReadStream(`./${path}`, 'utf8');
  } else if (!existsSyncPath) {
    process.stdout.write('Your line: ');
    return process.stdin;
  }

  process.stderr.write('Input file/path was not found, try again \n');
  process.on('exit', code => console.log(`Process code: ${code}`));
  const exit = process.exit;
  exit(1);
}

module.exports = input_stream;
