'use strict';

var once = require('./');

describe('co-once', function () {
  it('should wrap the generator', function* () {
    var fn = function* (a, b) {
      return a + b;
    }
    var wrapped = once(fn);
    (yield* wrapped(1, 2)).should.eql(3);
  });
  it('should call the function once', function* () {
    var called = 0;
    var fn = function* () {
      called++;
    }
    var wrapped = once(fn);
    yield* wrapped();
    yield* wrapped();
    called.should.eql(1);
  });
  it('should cache the result', function* () {
    var fn = function* (a, b) {
      return a + b;
    }
    var wrapped = once(fn);
    yield* wrapped(1, 1);
    (yield* wrapped(1, 2)).should.eql(2);
  });
  it('should keep the context', function* () {
    var fn = function* () {
      return this.a;
    };
    var context = {
      a: 666,
    };
    var wrapped = once(fn);
    (yield* wrapped.call(context)).should.eql(666);
  });
});
