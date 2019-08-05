// const request = require('request');

function MPromise(cb) {
  if (typeof cb !== 'function') {
    throw new Error('Invalid callback');
  }

  this.fn = cb;

  this.reject = (...params) => {
    this.rejectCb(...params);
  };

  this.resolve = (...params) => {
    this.resolveCb(...params);
  };

  this.isRun = false;

  this.then = (res, rej) => {
    this.resolveCb = res;
    this.rejectCb = rej;
    this.fn(this.resolve, this.reject);
    this.isRun = true;
    return this;
  };

  this.catch = (rejectCb) => {
    this.rejectCb = rejectCb;
    if (!this.isRun) {
      this.fn(this.resolve, this.reject);
    }
    return this;
  };
}

module.exports = MPromise;
