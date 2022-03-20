const h1 = document.querySelector("h1");

function time() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  h1.innerText = `Now Time: ${hours}:${minutes}`;
}
time();
setInterval(time, 1000);
