"use strict";
const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = 0,
      minutes = 0,
      seconds = 0;
    //let days = Math.floor(timeRemaining / 60 / 60 / 24);
    if (timeRemaining > 0) {
      hours = Math.floor(timeRemaining / 60 / 60);
      minutes = Math.floor((timeRemaining / 60) % 60);
      seconds = Math.floor(timeRemaining % 60);
    }

    return { timeRemaining, hours, minutes, seconds };
  };

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return "0" + elem;
    } else {
      return String(elem);
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
    }
  };
  updateClock();
  setInterval(updateClock, 1000);
};

export default timer;
