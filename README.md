# running-average [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Memory-efficient module that accepts an unlimited quantity of numbers and returns the average of the most recent n numbers


## Install

```sh
$ npm install --save running-average
```


## Usage

```js
var RunningAverage = require('running-average');

// create an instance
var runningAverage = new RunningAverage({
  windowSize: 4 // how many recent numbers to consider when calculating average
});

// push a number
runningAverage.push(1);

// or a few numbers
runningAverage.push(2, 3, 4);

// get the current average any time you want
runningAverage.getAverage(); // => 2.5

// add some more numbers
runningAverage.push(4,4,4,4);

// get an updated average (which only takes into account the last `windowSize` numbers)
runningAverage.getAverage(); // => 4

// oh, and it's chainable too!
runningAverage.push(1).push(3).getAverage(); // => 3
```

## License

MIT © [Nathan Friedly](http://nfriedly.com/)


[npm-image]: https://badge.fury.io/js/running-average.svg
[npm-url]: https://npmjs.org/package/running-average
[travis-image]: https://travis-ci.org/nfriedly/running-average.svg?branch=master
[travis-url]: https://travis-ci.org/nfriedly/running-average
[daviddm-image]: https://david-dm.org/nfriedly/running-average.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nfriedly/running-average
