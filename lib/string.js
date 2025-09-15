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
 * Generates a random string with customizable characters.
 *
 * @param {number} length - The desired length of the string.
 * @param {string} [extraChars=""] - Additional characters to include.
 * @param {"concat"|"replace"} [mode="concat"] - Whether to concat with default characters or replace them.
 * @returns {string} The random string.
 *
 * @example
 * // Default: only alphanumeric
 * getRandomString(8) // e.g. "Ab9X3tP2"
 *
 * @example
 * // Add special symbols in concat mode
 * getRandomString(8, "!@#$", "concat") // e.g. "aB!3@Pq#"
 *
 * @example
 * // Replace default characters with only custom ones
 * getRandomString(8, "01", "replace") // e.g. "00101010"
 */
function getRandomString(length, extraChars = "", mode = "concat") {
  const defaultChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let characters;
  if (mode === "replace") {
    characters = extraChars || defaultChars; // fallback if empty
  } else {
    characters = defaultChars + extraChars;
  }

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
