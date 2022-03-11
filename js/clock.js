const clock = document.querySelector(".clock_text");

function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();
