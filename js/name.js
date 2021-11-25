const nameForm = document.querySelector("#name");
const nameInput = document.querySelector("#name input");
const first = document.querySelector("#first");
const greet = document.querySelector("#greeting");
const greet2 = document.querySelector("h2");
const mainPage = document.querySelector("#mainPage");

const accessUsername = ["정도영","강인철","유민석","서준영","이장희","고도연","이동욱","진태준","김민식","김민승","장형준","안재국","김현우","서동혁"]

function toCheckName(event){
  event.preventDefault();
  const username = nameInput.value;
  if (accessUsername.includes(nameInput.value)){
    nameForm.classList.add("hidden");
    greet.innerText = `안녕하세요, ${username}님!`;
    greet2.innerText = "명촌의 미래들에 접속하신 것을 환영합니다!";
    first.classList.add("fade-in");
    first.classList.remove("hidden");
    setTimeout(toBlind, 2000);
    
  }else{
    nameForm.classList.add("hidden")
    first.classList.remove("hidden");
    greet.innerText = `${username}님! \n접근이 제한됩니다!`;
  }
 
}

function toBlind(){
  first.classList.add("fade-out");
  setTimeout(() => {
    mainPage.classList.remove("hidden");
    mainPage.classList.add("fade-in");
  },2000);
}

// function onMainpage(){
//   mainPage.classList.remove("hidden");
//   mainPage.classList.add("fade-in");
// }

nameForm.addEventListener("submit", toCheckName);