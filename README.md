# meo-forkcy-utils

A handy collection of JavaScript utility functions for time, random, string, array, and misc operations.

## Installation

```bash
npm install meo-forkcy-utils
```

## Usage

```javascript
const utils = require("meo-forkcy-utils");
```

## Examples

```javascript
const {
  getRandomNumber,
  getRandomString,
  randomColor,
  capitalize,
  slugify,
  getTime,
  sleep,
} = require("meo-forkcy-utils");

// Generate random number between 1 and 100
console.log("Random Number (1-100):", getRandomNumber(1, 100));

// Generate random 10-character string
console.log("Random String (10):", getRandomString(10));

// Generate random color
console.log("Random Color:", randomColor());

// Capitalize text
console.log("Capitalize:", capitalize("meo forkcy"));

// Convert to URL-friendly slug
console.log("Slugify:", slugify("This Cat is not a Robot!"));

// Format current timestamp
console.log("Time Now:", getTime(Date.now()));

// Async sleep example
(async () => {
  console.log("Sleeping 1 second...");
  await sleep(1000);
  console.log("Woke up!");
})();
```

or just type:

```bash
npm run example
```

## API Reference

### String Utils

- `capitalize(str)`: Capitalizes the first letter of a string
- `getRandomString(length)`: Generates a random string of specified length
- `slugify(str)`: Converts a string to URL-friendly slug format

### Random Utils

- `getRandomNumber(min, max, decimalPlaces)`: Generates a random number between min and max
- `randomColor()`: Generates a random hex color code
- `shuffleArray(arr)`: Randomly shuffles an array

### Time Utils

- `getTime(timestamp)`: Formats a timestamp into "YYYY-MM-DD HH:mm:ss"
- `sleep(ms)`: Creates a promise that resolves after specified milliseconds

### Array Utils

- `groupBy(array, keyFn)`: Groups array items by a key function

### Misc Utils

- `debounce(fn, delay)`: Creates a debounced function
- `throttle(fn, interval)`: Creates a throttled function
- `isEmpty(obj)`: Checks if an object is empty
- `clearConsole()`: Clears the console (cross-platform)

## License

MIT © meo-forkcy
