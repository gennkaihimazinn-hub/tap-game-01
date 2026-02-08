const btn = document.getElementById("tapBtn");
const message = document.getElementById("message");

let startTime = 0;
let waiting = false;

function startGame() {
  if (waiting) return;

  message.textContent = "WAIT...";
  waiting = true;

  const waitTime = Math.random() * 3000 + 1000;

  setTimeout(() => {
    message.textContent = "TAP!";
    startTime = Date.now();
  }, waitTime);
}

function tap() {
  if (!waiting || startTime === 0) return;

  const reaction = Date.now() - startTime;
  message.textContent = `反応速度：${reaction} ms`;

  waiting = false;
  startTime = 0;
}

btn.addEventListener("click", startGame);
btn.addEventListener("touchstart", startGame);

btn.addEventListener("click", tap);
btn.addEventListener("touchstart", tap);
