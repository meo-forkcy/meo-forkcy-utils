/**
 * Groups elements of an array based on the result of a key function.
 *
 * @template T
 * @param {T[]} array - The array to group.
 * @param {(item: T) => string | number} keyFn - A function to determine the group key for each item.
 * @returns {Record<string, T[]>} An object where each key maps to an array of items with that key.
 *
 * @example
 * groupBy([
 *   { type: 'fruit', name: 'apple' },
 *   { type: 'fruit', name: 'banana' },
 *   { type: 'vegetable', name: 'carrot' }
 * ], item => item.type)
 * // => {
 * //   fruit: [...],
 * //   vegetable: [...]
 * // }
 */
function groupBy(array, keyFn) {
  return array.reduce((acc, item) => {
    const key = String(keyFn(item)); // ensure the key is a string
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

module.exports = {
  groupBy,
};
