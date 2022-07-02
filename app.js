const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".seconds");
const deg = 6;

setInterval(() => {
  let currentDay = new Date();
  let currentHour = currentDay.getHours() * 30;
  // console.log(currentHour);
  let currentMin = currentDay.getMinutes() * deg;
  let currentSec = currentDay.getSeconds() * deg;

  hour.style.transform = `rotateZ(${(currentHour + currentMin) / 12} deg)`;
  min.style.transform = `rotateZ(${currentMin}deg)`;
  sec.style.transform = `rotateZ(${currentSec}deg)`;
}, 1000);

// dark mode
let content = document.getElementsByTagName("body")[0];
let darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", () => {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
