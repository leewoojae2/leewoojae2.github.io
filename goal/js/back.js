function random() {
  const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const randomimg = imgs[Math.floor(Math.random() * imgs.length)];
  const body = document.querySelector("body");
  const background = `img/${randomimg}`;
  body.style.backgroundImage = "url(" + background + ")";
}
random();
setInterval(random, 10000);
