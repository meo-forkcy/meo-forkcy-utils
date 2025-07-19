# meo-forkcy-utils

A handy collection of modern JavaScript utility functions for working with strings, arrays, numbers, time, randomness, and more.

## 🚀 Installation

```bash
npm install meo-forkcy-utils
```

## 📦 Usage

```js
const utils = require("meo-forkcy-utils");
```

Or use destructuring:

```js
const {
  getRandomNumber,
  getRandomString,
  randomColor,
  capitalize,
  slugify,
  getTime,
  sleep,
  toHex,
  atob,
  uuidv4,
  uuidv3,
  uuidv5,
} = require("meo-forkcy-utils");
```

## 🔍 Examples

```js
console.log("Random Number (1-100):", getRandomNumber(1, 100));

console.log("Random String (10):", getRandomString(10));

console.log("Random Color:", randomColor());

console.log("Capitalize:", capitalize("meo forkcy"));

console.log("Slugify:", slugify("This Cat is not a Robot!"));

console.log("Time Now:", getTime(Date.now()));

console.log("Random UUID V4:", uuidv4());

console.log(
  "Random UUID V3:",
  uuidv3("example", "6ba7b810-9dad-11d1-80b4-00c04fd430c8")
);

console.log(
  "Random UUID V5:",
  uuidv5("example", "6ba7b810-9dad-11d1-80b4-00c04fd430c8")
);

console.log("Random HEX:", toHex("meo"));

console.log("Random base64:", atob(btoa("test")));

(async () => {
  console.log("Sleeping 1 second...");
  await sleep(1); // default unit is seconds
  console.log("Woke up!");
})();
```

Or just run the demo:

```bash
npm run example
```

---

## 📘 API Reference

### 🧵 String Utilities

- `capitalize(str)`: Capitalizes the first character of a string.
- `getRandomString(length)`: Generates a random alphanumeric string.
- `slugify(str)`: Converts a string into a URL-friendly slug.

### 🎲 Random Utilities

- `getRandomNumber(min, max, decimalPlaces?)`: Returns a random number. If `decimalPlaces` is omitted, returns an integer.
- `randomColor()`: Generates a random hex color (e.g., `#3f9ad6`).
- `randomHex(length)`: Returns a random hex string of a given length.
- `shuffleArray(arr)`: Shuffles an array using the Fisher–Yates algorithm.
- `getRandomElements(arr, count)`: Picks random `count` elements from the array.

### ⏱️ Time Utilities

- `getTime(timestamp)`: Formats a timestamp into `"YYYY-MM-DD HH:mm:ss"`.
- `sleep(value, unit?)`: Asynchronously sleeps. Supports units: `"ns"`, `"μs"`, `"ms"`, `"s"` (default), `"m"`, `"h"`.

### 🧮 Array Utilities

- `groupBy(array, keyFn)`: Groups array items based on the return value of a key function.

### 🧰 Miscellaneous Utilities

- `debounce(fn, delay)`: Returns a debounced version of `fn`.
- `throttle(fn, interval)`: Returns a throttled version of `fn`.
- `isEmpty(obj)`: Checks if an object has no enumerable keys.
- `clearConsole()`: Clears the terminal screen (cross-platform).

---

## 🪪 License

MIT © [meo-forkcy](https://github.com/meo-forkcy)
