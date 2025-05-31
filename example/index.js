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
  console.log("Sleeping 1 second...");
  await sleep(1000);
  console.log("Woke up!");
})();
