const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".seconds");
const deg = 6;

setInterval(() => {
  let currentDay = new Date();
  let currentHour = currentDay.getHours();
  console.log(currentHour);
  let currentMin = currentDay.getMinutes() * deg;
  let currentSec = currentDay.getSeconds() * deg;

  hour.style.transform = `rotateZ(${currentHour + currentMin / 12} deg)`;
  min.style.transform = `rotateZ(${currentMin}deg)`;
  sec.style.transform = `rotateZ(${currentSec}deg)`;
}, 1000);
