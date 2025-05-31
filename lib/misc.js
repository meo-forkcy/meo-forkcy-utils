const { spawn } = require("child_process");

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

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

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function clearConsole() {
  if (process.platform === "win32") {
    spawn("cmd.exe", ["/c", "cls"], { stdio: "inherit" });
  } else {
    process.stdout.write("\x1B[2J\x1B[3J\x1B[H");
  }
}

module.exports = {
  debounce,
  throttle,
  isEmpty,
  clearConsole,
};
