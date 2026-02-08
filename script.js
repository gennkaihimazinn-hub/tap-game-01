const btn = document.getElementById("tapBtn");
const message = document.getElementById("message");

let startTime = 0;
let state = "ready"; // ready / wait / tap

btn.addEventListener("pointerdown", handleTap);

function handleTap() {
  if (state === "ready") {
    message.textContent = "WAIT...";
    state = "wait";

    const waitTime = Math.random() * 3000 + 1000;

    setTimeout(() => {
      message.textContent = "TAP!";
      startTime = Date.now();
      state = "tap";
    }, waitTime);

  } else if (state === "tap") {
    const reaction = Date.now() - startTime;
    message.textContent = `反応速度：${reaction} ms`;
    state = "ready";
    startTime = 0;
  }
}
