// https://devhints.io/nodejs-stream
const Transform = require('stream').Transform;
const caesarCipher = require('../helpers/caesarCipher');

module.exports = function transformStream(actionType, shift) {
  return new Transform({
    objectMode: true,
    transform(data, _, done) {
      this.push(caesarCipher(data.toString('utf-8'), shift, actionType));
      done();
    }
  });
};
