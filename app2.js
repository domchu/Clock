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
  // console.log(month);

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
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Febuary";
      break;
    case 2:
      month = " March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }
  // console.log(month);

  clock.innerHTML = `${hour}:${minute} : ${seconds} ${am_pm}`;
  document.querySelector(".day").innerHTML = currentDay;
  document.querySelector(".month").innerHTML = `${month}`;
  document.querySelector(".year").innerHTML = `${year}`;
}, 1000);
