/**
 * Formats a timestamp into `YYYY-MM-DD HH:mm:ss`.
 *
 * @param {number} [timestamp=Date.now()] - The timestamp to format (milliseconds since epoch).
 * @returns {string} Formatted date-time string.
 *
 * @example
 * getTime() // e.g. "2025-09-15 16:22:05"
 *
 * @example
 * getTime(1736998800000) // "2025-01-16 00:00:00"
 */
function getTime(timestamp = Date.now()) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Sleep for a specified duration.
 *
 * @param {number} value - The amount of time to sleep.
 * @param {'ns' | 'μs' | 'us' | 'ms' | 's' | 'm' | 'h'} [type='s'] - The time unit:
 * nanoseconds (`'ns'`), microseconds (`'μs'` or `'us'`), milliseconds (`'ms'`),
 * seconds (`'s'`), minutes (`'m'`), or hours (`'h'`).
 * @returns {Promise<void>} A promise that resolves after the specified time.
 *
 * @example
 * await sleep(1); // 1 second (default)
 * await sleep(500, 'ms'); // 500 milliseconds
 * await sleep(2, 'm'); // 2 minutes
 */
function sleep(value, type = "s") {
  const units = {
    ns: 1 / 1_000_000, // nanoseconds (converted to ms)
    μs: 1 / 1_000, // microseconds
    us: 1 / 1_000, // alternative symbol for microseconds
    ms: 1, // milliseconds
    s: 1000, // seconds
    m: 60 * 1000, // minutes
    h: 60 * 60 * 1000, // hours
  };

  const multiplier = units[type];
  if (!multiplier) {
    throw new Error(`Unsupported time unit: ${type}`);
  }

  const ms = value * multiplier;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  getTime,
  sleep,
};
