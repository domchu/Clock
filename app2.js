setInterval(() => {
  const clock = document.querySelector(".clock-digital");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm;
  am_pm = hour >= 12 ? "PM" : "AM";

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  clock.innerHTML = `${hour} : ${minute} : ${seconds} ${am_pm}`;
}, 1000);
