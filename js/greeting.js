const greeting = document.querySelector(".my-name");
const USER_NAME_KEY = "username";

function paintName(text) {
  greeting.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name_text";
  title.innerHTML = `Hello ${text}`;
  greeting.appendChild(title);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "Please write your name";
  input.type = "text";
  input.className = "name_input";
  input.required = 1;
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  greeting.appendChild(form);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem(USER_NAME_KEY, value);
  paintName(value);
}

function loadName() {
  const name = localStorage.getItem(USER_NAME_KEY);
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();
