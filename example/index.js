const {
  getRandomNumber,
  getRandomString,
  randomColor,
  capitalize,
  slugify,
  getTime,
  sleep,
} = require("../index");

console.log("Random Number (1-100):", getRandomNumber(1, 100));
console.log("Random String (10):", getRandomString(10));
console.log("Random Color:", randomColor());
console.log("Capitalize:", capitalize("meo forkcy"));
console.log("Slugify:", slugify("This Cat is not a Robot!"));
console.log("Time Now:", getTime(Date.now()));

(async () => {
  await sleep(100000, "ns"); // 100000 nanoseconds
  await sleep(500, "ms"); // 500 milliseconds
  await sleep(1, "m"); // 1 minute
  await sleep(0.5, "h"); // 0.5 hours

  console.log("Sleeping 0.5 second...");
  await sleep(0.5); // 0.5 seconds or 500 milliseconds
  console.log("Woke up!");
})();
