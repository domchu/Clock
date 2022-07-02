setInterval(() => {
  const clock = document.querySelector(".clock-digital");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm;
  let currentDay;
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

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

  if (hour > 12) {
    hour = hour - 12;
  }

  switch (date.getDay()) {
    case 0:
      currentDay = "Sunday";
      break;
    case 1:
      currentDay = "Monday";
      break;
    case 2:
      currentDay = "Tueday";
      break;
    case 3:
      currentDay = "Wednesday";
      break;
    case 4:
      currentDay = "Thursday";
      break;
    case 5:
      currentDay = "Friday";
      break;
    case 6:
      currentDay = "Saturday";
      break;

    default:
      break;
  }
  // console.log(currentDay);

  clock.innerHTML = `${hour} : ${minute} : ${seconds} ${am_pm}`;
  document.querySelector(".day").innerHTML = currentDay;
}, 1000);
