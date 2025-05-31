function getRandomNumber(min, max, decimalPlaces = null) {
  const rand = Math.random() * (max - min) + min;
  return decimalPlaces === null
    ? Math.floor(rand)
    : parseFloat(rand.toFixed(decimalPlaces));
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = {
  getRandomNumber,
  randomColor,
  shuffleArray,
};
