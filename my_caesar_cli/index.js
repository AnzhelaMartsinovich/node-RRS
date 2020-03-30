const program = require('commander');
const { pipeline } = require('stream');

const input_stream = require('./streams/inputStream');
const transform_stream = require('./streams/transformStream');
const output_stream = require('./streams/outputStream');
const shiftAction = require('./helpers/args');

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <filePath>', 'an input file')
  .option('-o, --output <filePath>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .version('0.0.1')
  .parse(process.argv);

const programOptions = program.opts();
shiftAction(programOptions);

pipeline(
  input_stream(programOptions.input),
  transform_stream(programOptions.action, programOptions.shift),
  output_stream(programOptions.output),
  err => {
    if (err) {
      console.log(`Failed: ${err.statusCode}`);
    }
    console.log('Success!');
  }
);
