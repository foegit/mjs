const { should } = require('chai');
const MPromise = require('./../mpromise');

should();

const myPromise = new MPromise((resolve, reject) => {
  setTimeout(() => {
    const serverStatus = Math.floor(Math.random() * 501);
    if (serverStatus < 300) {
      reject(`Server send ${serverStatus} status;`, 2);
    } else {
      resolve(`Server send ${serverStatus} status. P.s. Tobi pizda`);
    }
  }, 2000);
});

describe('MPromise', () => {
  it('Create an object', () => {
    myPromise.should.be.an('object');
  });

  it('Have then method', () => {
    myPromise.should.has.property('then');
    myPromise.then.should.be.a('function');
  });

  it('Have catch method', () => {
    myPromise.should.has.property('catch');
    myPromise.catch.should.be.a('function');
  });
});
