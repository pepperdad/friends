const clock = document.querySelector(".ddayclock");

const second = 1000;
const minutes = second * 60;
const hours = minutes * 60;
const days = hours * 24;

function changeLast() {
  const date = new Date();
  const dday = new Date(2021,10,28,0,0);
  let lastSeconds = dday - date;
  const lastDays = String(Math.floor(lastSeconds / days)).padStart(2, "0");
  const lastHours = String(
    Math.floor((lastSeconds - lastDays * days) / hours)
  ).padStart(2, "0");
  const lastMinutes = String(
    Math.floor((lastSeconds - lastDays * days - lastHours * hours) / minutes)
  ).padStart(2, "0");
  const lastSecond = String(
    Math.floor(
      (lastSeconds -
        lastDays * days -
        lastHours * hours -
        lastMinutes * minutes) /
        second
    )
  ).padStart(2, "0");
  clock.innerText = `${lastDays}d ${lastHours}h ${lastMinutes}m ${lastSecond}s`;
}

changeLast();
setInterval(changeLast, 1000);