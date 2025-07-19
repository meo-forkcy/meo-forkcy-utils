const {
  getRandomNumber,
  getRandomString,
  randomColor,
  capitalize,
  slugify,
  getTime,
  sleep,
  uuidv4,
  uuidv3,
  uuidv5,
  toHex,
  btoa,
  atob,
} = require("../index");

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
console.log("To Hex:", toHex("meo_forkcy"));
console.log("Base64:", btoa("meo_forkcy"));
console.log("Base64 Decode:", atob("bWVvX2ZvcmtjeQ=="));

(async () => {
  await sleep(100000, "ns"); // 100000 nanoseconds
  await sleep(500, "ms"); // 500 milliseconds
  await sleep(1, "m"); // 1 minute
  await sleep(0.5, "h"); // 0.5 hours

  console.log("Sleeping 0.5 second...");
  await sleep(0.5); // 0.5 seconds or 500 milliseconds
  console.log("Woke up!");
})();
