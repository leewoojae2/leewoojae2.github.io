const maxnumber = document.querySelector(".maxnumber");
const mynumber = document.querySelector(".mynumber");
const btn = document.querySelector(".form");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");

function handlesubmit(event) {
  event.preventDefault();
  const mynbr = parseInt(mynumber.value);
  const maximum = parseInt(maxnumber.value);
  const randomnumber = Math.ceil(Math.random() * maximum);
  if (randomnumber === mynbr) {
    result.innerText = `You chose: ${mynbr}, the machine chose: ${randomnumber}`;
    result1.innerText = "You Win!";
  } else if (randomnumber !== mynbr) {
    result.innerText = `You chose: ${mynbr}, the machine chose: ${randomnumber}`;
    result1.innerText = "You lose!";
  }
}

btn.addEventListener("submit", handlesubmit);
