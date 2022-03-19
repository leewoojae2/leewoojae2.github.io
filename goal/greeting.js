const form = document.getElementById("form");
const names = document.querySelector(".name");
const button = document.querySelector(".button");
const write = document.querySelector(".write");

function handlebtn(event) {
  event.preventDefault();
  const username = names.value;
  localStorage.setItem("name", username);
  form.classList.add("hidden");
  returns(username);
}

function returns(user) {
  write.classList.remove("hidden");
  write.innerText = `${user}'s have to do list`;
}

const savename = localStorage.getItem("name");
if (savename === null) {
  form.classList.remove("hidden");
  form.addEventListener("submit", handlebtn);
} else {
  returns(savename);
}
