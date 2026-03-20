# running-average 

[![NPM version][npm-image]][npm-url]
![Node.js CI](https://github.com/nfriedly/running-average/workflows/Node.js%20CI/badge.svg)

Memory-efficient module that tracks the current average value of an unlimited series of numbers.


## Usage

```js
import { RunningAverage } from 'running-average'; // ES modules

// create an instance
const runningAverage = new RunningAverage();

// push a number
runningAverage.push(1);

// or a few numbers
runningAverage.push(2, 3, 4);

// or an array of numbers
runningAverage.push([5, 6, 7]);

// get the current average any time you want
runningAverage.getAverage(); // => 4

// add some more numbers
runningAverage.push(8, 9);

// get an updated average 
runningAverage.getAverage(); // => 5

// oh, and it's chainable too!
runningAverage.push(10).push(11).getAverage(); // => 6

```

See version 2.x for a non-ESM version (CommonJS (`require(...)`)/UMD).

Also see version 1.x for a `windowSize` option to limit the average to the last *n* numbers, but be aware that it uses a less efficient algorithm.

## License

MIT © [Nathan Friedly](http://nfriedly.com/)


[npm-image]: https://badge.fury.io/js/running-average.svg
[npm-url]: https://npmjs.org/package/running-average
[bower-image]: http://badge.fury.io/bo/running-average.svg
