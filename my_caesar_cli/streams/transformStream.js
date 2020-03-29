// https://devhints.io/nodejs-stream
const Transform = require('stream').Transform;
const action = require('./../helpers/action');

module.exports = function transformStream(actionType, shift) {
  return new Transform({
    objectMode: true,
    transform(data, _, done) {
      this.push(action(data.toString('utf-8'), shift, actionType));
      done();
    }
  });
};
