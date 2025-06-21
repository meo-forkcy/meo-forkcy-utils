/**
 * Capitalizes the first character of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 *
 * @example
 * capitalize("hello") // "Hello"
 */
function capitalize(str) {
  return str.length === 0 ? "" : str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {number} length - The desired length of the string.
 * @returns {string} The random string.
 *
 * @example
 * getRandomString(8) // e.g. "Ab9X3tP2"
 */
function getRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} str - The input string.
 * @returns {string} The slugified string.
 *
 * @example
 * slugify("Tôi là ChatGPT!") // "toi-la-chatgpt"
 */
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD") // convert to decomposed form
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumerics
    .trim()
    .replace(/\s+/g, "-"); // replace whitespace with hyphens
}

module.exports = {
  capitalize,
  getRandomString,
  slugify,
};
