// https://devhints.io/nodejs-stream
const Transform = require('stream').Transform;
const encode = require('./../helpers/encode');
const decode = require('./../helpers/decode');

module.exports = function transformStream(action, shift) {
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
  action === 'encode' ? (action = encode) : (action = decode);

  return new Transform({
    objectMode: true,
    transform(data, _, done) {
      this.push(action(data.toString('utf-8'), shift));
      done();
    }
  });
};
