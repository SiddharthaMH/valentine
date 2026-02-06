if (localStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

const now = Date.now();
let currentDay = null;

for (let day of SCHEDULE) {
  const unlock = new Date(day.date).getTime();
  if (isNaN(unlock)) {
    console.error("Invalid date:", day);
    continue;
  }

  if (now >= unlock) {
    currentDay = day;
  } else {
    break;
  }
}

if (currentDay) {
  window.location.href = currentDay.page;
} else {
  window.location.href = "countdown.html";
}
