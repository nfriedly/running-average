'use strict';

function RunningAverage(config) {
  config = config || {};
  this.windowSize = config.windowSize || 100;
  this.index = 0;
  this.array = [];
}

RunningAverage.prototype.push = function push(number) {
  if (arguments.length != 1) {
    for (var i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  } else {
    var orig = number;
    if (typeof number != 'number') {
      number = parseInt(number, 10);
    }
    if (isNaN(number)) {
      throw new TypeError("RunningAverage.push only accepts numbers, received: " + orig);
    }
    this.array[this.index] = number;
    this.index++;
    if (this.index >= this.windowSize) {
      this.index = 0;
    }
  }
  return this;
};

RunningAverage.prototype.getAverage = function getAverage() {
  return this.array.reduce(function (avg, next, i, array) {
    return avg + (next / array.length);
  }, 0);
};

module.exports = RunningAverage;
module.exports.RunningAverage = RunningAverage;
