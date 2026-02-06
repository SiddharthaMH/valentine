if (localStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

const now = Date.now();
let nextDay = null;

// Find FIRST future day for countdown
for (let day of SCHEDULE) {
  const unlock = new Date(day.date).getTime();
  
  if (isNaN(unlock)) {
    console.error("Invalid date:", day);
    continue;
  }

  if (now < unlock) {
    nextDay = day;  // First future day
    break;
  }
}

// If all days passed → Valentine's
if (!nextDay) {
  window.location.href = "days/valentine.html";
} else {
  window.location.href = "countdown.html";  // Show countdown for nextDay
}

