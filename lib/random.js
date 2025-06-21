/**
 * Generate a random number between min and max.
 *
 * @param {number} min - Minimum value (inclusive).
 * @param {number} max - Maximum value (exclusive).
 * @param {number|null} [decimalPlaces=null] - Number of decimal places. If null, returns an integer.
 * @returns {number} The random number.
 */
function getRandomNumber(min, max, decimalPlaces = null) {
  const rand = Math.random() * (max - min) + min;
  return decimalPlaces === null
    ? Math.floor(rand)
    : parseFloat(rand.toFixed(decimalPlaces));
}

/**
 * Generate a random hex color string in the format "#rrggbb".
 *
 * @returns {string} The random color string.
 */
function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

/**
 * Generate a random hex string of the specified length.
 *
 * @param {number} length - Length of the hex string.
 * @returns {string} Random hex string.
 */
function randomHex(length) {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * @template T
 * @param {T[]} arr - Array to shuffle (in place).
 * @returns {T[]} The shuffled array.
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Selects a given number of random elements from an array (without modifying the original).
 *
 * @template T
 * @param {T[]} arr - The array to sample from.
 * @param {number} count - Number of elements to return.
 * @returns {T[]} Randomly selected elements.
 */
function getRandomElements(arr, count) {
  const shuffled = arr.slice();
  shuffleArray(shuffled);
  return shuffled.slice(0, count);
}

module.exports = {
  getRandomNumber,
  randomColor,
  randomHex,
  shuffleArray,
  getRandomElements,
};
