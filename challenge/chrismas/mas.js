const clockTitle = document.querySelector(".js-clock");

function chrismas() {
  const date = new Date().getTime();
  const chris = new Date("2022/12/25 00:00:00");
  const Dday = chris - date;
  const day = Math.floor(Dday / (1000 * 60 * 60 * 24));
  const hours = Math.floor((Dday / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((Dday / (1000 * 60)) % 60);
  const secound = Math.floor((Dday / 1000) % 60);

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${secound}s`;
}

chrismas();
setInterval(chrismas, 1000);
