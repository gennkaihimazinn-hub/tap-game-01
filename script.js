const startEl = document.getElementById("start");

let startTime = 0;
let timeoutId = null;
let state = "ready"; 
// ready → waiting → tap → result

function startGame() {
  startEl.textContent = "待て…";
  state = "waiting";

  const waitTime = Math.random() * 4000 + 1000; // 1〜5秒

  timeoutId = setTimeout(() => {
    startTime = performance.now();
    startEl.textContent = "TAP!";
    state = "tap";
  }, waitTime);
}

function handleTap() {
  if (state === "ready") {
    startGame();
    return;
  }

  if (state === "waiting") {
    clearTimeout(timeoutId);
    startEl.textContent = "早すぎ！\nタップして再挑戦";
    state = "ready";
    return;
  }

  if (state === "tap") {
    const reaction = Math.floor(performance.now() - startTime);
    startEl.textContent = `反応時間\n${reaction} ms\n\nタップして再挑戦`;
    state = "ready";
  }
}

startEl.addEventListener("click", handleTap);
startEl.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleTap();
});

