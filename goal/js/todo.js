const todoForm = document.getElementById("todo");
const todoInput = document.querySelector("#todo input");
const todolist = document.getElementById("list");
let todos = [];

function savelist() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function dellist(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  savelist();
}

function painttodo(mylist) {
  const li = document.createElement("li");
  li.id = mylist.id;
  const span = document.createElement("span");
  span.innerText = mylist.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
  button.addEventListener("click", dellist);
  savelist();
}

function entertodo(event) {
  event.preventDefault();
  const mylist = todoInput.value;
  const listobj = { text: mylist, id: Date.now() };
  todoInput.value = "";
  todos.push(listobj);
  painttodo(listobj);
}

todoForm.addEventListener("submit", entertodo);

const savetodo = localStorage.getItem("todos");
if (savetodo !== null) {
  const parsetodo = JSON.parse(savetodo);
  todos = parsetodo;
  parsetodo.forEach(painttodo);
}
