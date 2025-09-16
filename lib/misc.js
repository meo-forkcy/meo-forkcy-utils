const { spawn } = require("child_process");
const { sleep } = require("./time");

/**
 * Creates a debounced version of a function that delays invoking it
 * until after a given delay has passed since the last time it was called.
 *
 * @param {(...args: any[]) => void} fn - The function to debounce.
 * @param {number} delay - Delay in milliseconds.
 * @returns {(...args: any[]) => void}
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Creates a throttled version of a function that invokes it at most once
 * every specified interval.
 *
 * @param {(...args: any[]) => void} fn - The function to throttle.
 * @param {number} interval - Interval in milliseconds.
 * @returns {(...args: any[]) => void}
 */
function throttle(fn, interval) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Checks whether an object is empty (has no own enumerable properties).
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} True if empty, false otherwise.
 */
function isEmpty(obj) {
  return obj && typeof obj === "object" && Object.keys(obj).length === 0;
}

/**
 * Clears the console screen (cross-platform).
 */
async function clearConsole() {
  await sleep(0.1);
  if (process.platform === "win32") {
    spawn("cmd.exe", ["/c", "cls"], { stdio: "inherit" });
  } else {
    process.stdout.write("\x1B[2J\x1B[3J\x1B[H");
  }
  await sleep(0.1);
}

module.exports = {
  debounce,
  throttle,
  isEmpty,
  clearConsole,
};
