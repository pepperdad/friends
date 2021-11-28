const form = document.querySelector(".loginForm form");
const nameInput = document.querySelector(".loginForm form input");
const welcome = document.querySelector("#user span");
const NAME_KEY ="name";
const savedName = localStorage.getItem(NAME_KEY);
const button = document.querySelector("button");
const container=document.querySelector("#mainSpace");
const greet = document.querySelector("#greeting");
const greet2 = document.querySelector("h2");
const first = document.querySelector("#first");
const mainPage = document.querySelector("#mainPage");
const mainSpace = document.querySelector("#mainSpace");

function existName(name){
  form.classList.add("hidden");
  welcome.innerText = `Hello, \n ${name}`;
  button.classList.remove("hidden");
}

function fifo(id){
  id.classList.add("fade-in");
  id.classList.remove("hidden");
}

function fiMain(){
  first.classList.add("hidden");
  mainPage.classList.add("fade-in");
  mainPage.classList.remove("hidden");
}


function greeting(event) {
  event.preventDefault();
  form.classList.add("hidden");
  localStorage.setItem(NAME_KEY, nameInput.value);
  greet.innerText = `안녕하세요, ${nameInput.value}님!`;
  greet2.innerText = "doyeong's에 접속하신 것을 환영합니다!";
  fifo(first);
  setTimeout(()=>first.classList.add("fade-out"),2000);
  setTimeout(fiMain,4000);
  setTimeout(()=>mainPage.classList.add("fade-out"),6000);
  setTimeout(()=>mainPage.classList.add("hidden"),8000);
  setTimeout(()=>{mainSpace.classList.remove("hidden");
  mainSpace.classList.add("container");},8000);
  existName(nameInput.value);
}

function onLogoutClick(){
  localStorage.clear();
  window.location.reload();
}

if (savedName === null){
  button.classList.add("hidden");
  form.addEventListener("submit", greeting);

}else{
  container.classList.remove("hidden");
  container.classList.add("container");
  existName(savedName);
}

button.addEventListener("click", onLogoutClick);

// function toBlind(){
//   first.classList.add("fade-out");
//   setTimeout(() => {
//     first.classList.add("hidden");
//     mainPage.classList.remove("hidden");
//     mainpage.classList.add("fade-in");
//   },2000);
// }