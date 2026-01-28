const now = Date.now();
let next = null;

for (let day of SCHEDULE) {
  const t = new Date(day.date).getTime();
  if (now < t) {
    next = day;
    break;
  }
}

const image = document.getElementById("image");
const title = document.getElementById("title");
const timer = document.getElementById("timer");

image.innerHTML = `<img src="${next.img}" alt="${next.name}">`;
title.innerText = `${next.name} unlocks in`;

function tick() {
  const diff = new Date(next.date).getTime() - Date.now();
  if (diff <= 0) location.href = "router.html";

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  timer.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(tick, 1000);
tick();
