const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date(2022, 1, 23, 12, 0);

const curDate = date.getDate();

const Day = date.getDay();
const curDay = weekdays[Day];

const Mnth = date.getMonth();
const curMnth = months[Mnth];

const curYear = date.getFullYear();

const curTime = date.getHours();
const curMinutes = date.getMinutes();

const endTime = document.querySelector(".offer-end-time");
endTime.textContent = `giveaway ends  on  ${curDay}, ${curDate},${curMnth} ${curYear} ${curTime}:${curMinutes}am`;

const futureTime =  new Date().getTime() + 259200000
 console.log(futureTime)
console.log(new Date().getTime())
function remainingTime() {
  const time = new Date().getTime();

  // const futureTime = new Date(2022, 1, 15, 17, 15).getTime();

  const timeRemain = futureTime - time;
  //  milliseconds per day ,hour ,mins
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMins = 60 * 1000;
  const oneSecs = 1000;
  //  total time remains in days/hours/minutes/seconds

  const dayRemain = Math.floor(timeRemain / oneDay);
  const hourRemain = Math.floor((timeRemain % oneDay) / oneHour)
  const minsRemain = Math.floor((timeRemain % oneHour) / oneMins)
  const secsRemain = Math.floor((timeRemain % oneMins) / oneSecs)

  const days = document.querySelector('.days')
  const hours = document.querySelector('.hours')
  const mins = document.querySelector('.mins')
  const secs = document.querySelector('.secs')
  days.textContent = dayRemain;
  hours.textContent = hourRemain;
  mins.textContent = minsRemain;
  secs.textContent = secsRemain;
  if (timeRemain < 0) {
    const container = document.querySelector('.container')
    container.innerHTML = `<h4>Sorry Gift time expired</h4>`;

}

}
let countdown = setInterval(remainingTime, 1000);
// remainingTime()
