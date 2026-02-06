if (localStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

const now = Date.now();

// Find CURRENT DAY (today or most recent past day)
let currentDay = null;
for (let day of SCHEDULE) {
  const unlock = new Date(day.date).getTime();
  if (now >= unlock) {
    currentDay = day;
  } else {
    break;
  }
}

// If we have a current day AND it's NOT tomorrow already
if (currentDay && now < new Date(SCHEDULE[SCHEDULE.indexOf(currentDay) + 1]?.date || Infinity).getTime()) {
  window.location.href = currentDay.page;
} else {
  // Show countdown for NEXT day
  window.location.href = "countdown.html";
}