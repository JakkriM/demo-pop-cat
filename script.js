let time;
let num;
let Numberscore = 0;
let opacitynumber = 0;
const pop = document.querySelector("body");
const cat = document.querySelector("#imgCat");
const score = document.querySelector("#score");
const name = document.getElementById("Nametag");
const soundPOP = new Audio("./sound/pop-cat-original-meme_3ObdYkj.mp3");
const blackBG = document.querySelector("blackBG");

const soundV2 = new Audio("./sound/soundV2.mp3");
const soundV3 = new Audio("./sound/soundV3.mp3");
const soundV4 = new Audio("./sound/soundV4.mp3");
const soundV5 = new Audio("./sound/soundV5.mp3");

// const pop = document.getElementById("card");

pop.addEventListener("pointerdown", () => {
  document.getElementById("score").classList.add("active");
  openMouse();
});

pop.addEventListener("pointerup", () => {
  document.getElementById("score").classList.remove("active");
  closeMouse();
});

document.getElementById("score").innerHTML = Numberscore;

chackclose();

function chackclose() {
  if (Numberscore < 100) {
    cat.src = "./images/close.webp";
    document.body.style.backgroundImage = "url(./images/bg.webp)";
  } else if (Numberscore < 150) {
    cat.src = "./images/closeV2.webp";
    document.body.style.backgroundImage = "url(./images/bgV2.webp)";
    soundV2.play();
  } else if (Numberscore < 200) {
    cat.src = "./images/closeV3.webp";
    document.body.style.backgroundImage = "url(./images/bgV3.webp)";
    soundV3.play();
  } else if (Numberscore < 300) {
    cat.src = "./images/closeV4.webp";
    document.body.style.backgroundImage = "url(./images/bgV4.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0";
    soundV4.play();
  } else if (Numberscore < 310) {
    cat.src = "./images/closeV4.webp";
    document.body.style.backgroundImage = "url(./images/bgV4.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.2";
  } else if (Numberscore < 320) {
    cat.src = "./images/closeV4.webp";
    document.body.style.backgroundImage = "url(./images/bgV4.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.4";
  } else if (Numberscore < 330) {
    cat.src = "./images/closeV4.webp";
    document.body.style.backgroundImage = "url(./images/bgV4.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.6";
  } else if (Numberscore < 340) {
    cat.src = "./images/closeV4.webp";
    document.body.style.backgroundImage = "url(./images/bgV4.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.8";
  } else if (Numberscore < 350) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "1";
  } else if (Numberscore > 400) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.0";
  } else if (Numberscore > 390) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.2";
  } else if (Numberscore > 380) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.4";
  } else if (Numberscore > 370) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.6";
  } else if (Numberscore > 360) {
    cat.src = "./images/closeV5.webp";
    document.body.style.backgroundImage = "url(./images/bgV5.webp)";
    document.getElementById("blackBG").style.opacity = opacitynumber = "0.8";
    soundV5.play();
  }
}

function chackopen() {
    cat.src = null;
  if (Numberscore < 100) {
    cat.src = "./images/open.webp";
  } else if (Numberscore < 150) {
    cat.src = "./images/openV2.webp";
  } else if (Numberscore < 200) {
    cat.src = "./images/openV3.webp";
  } else if (Numberscore < 350) {
    cat.src = "./images/openV4.webp";
  } else {
    cat.src = "./images/openV5.webp";
  }
}

function clickMouse() {
  Numberscore = Numberscore + 1;
  document.getElementById("score").innerHTML = Numberscore;
}

function openMouse() {
  soundPOP.play();
  clickMouse();
  chackopen();
}

function closeMouse() {
  chackclose();
}
function btnrefresh() {
  Numberscore = 0;
  document.getElementById("score").innerHTML = Numberscore;
  cat.src = "./images/close.webp";
  document.body.style.backgroundImage = "url(./images/bg.webp)";
  document.getElementById("blackBG").style.opacity = opacitynumber = "0";
  clearInterval(time);
  showtime.innerHTML = null;
}

const opneBtn = document.getElementById("time");
const startBtn = document.getElementById("timestart");
const timepop = document.getElementById("timepop");

opneBtn.addEventListener("click", () => {
  timepop.classList.add("open");
  document.getElementById("blackBG").style.opacity = opacitynumber = "0.8";
  document.getElementById("blackBG").style.zIndex = 998;
});

startBtn.addEventListener("click", () => {
  timepop.classList.remove("open");
  document.getElementById("blackBG").style.opacity = opacitynumber = "0";
  document.getElementById("blackBG").style.zIndex = 997;
});

const btnX = document.getElementById("X");

btnX.addEventListener("click", () => {
  timepop.classList.remove("open");
  document.getElementById("blackBG").style.zIndex = 997;
  document.getElementById("blackBG").style.opacity = opacitynumber = "0";
});

const showtime = document.querySelector("#showtime");
let ticking = new Audio("./sound/tick.mp3");
const endchallenge = document.getElementById("endchallenge");

function starttime() {
  btnrefresh();
  num = 30;
  let sec = 0;
  document.getElementById("score").innerHTML = Numberscore;
  time = setInterval(() => {
    showtime.innerHTML = num + sec;
    const yourscore = Numberscore;
    if (sec < -26) {
      showtime.style.color = "red";
    } else if (sec < -20) {
      showtime.style.color = "yellow";
    } else {
      showtime.style.color = "white";
    }
    if (sec == -30) {
      showtime.innerHTML = null;
      clearInterval(time);
      endtimepop.classList.add("open");
      document.getElementById("showscore").innerHTML = yourscore;
      document.getElementById("blackBG").style.opacity = opacitynumber = "0.8";
      document.getElementById("blackBG").style.zIndex = 998;
      calAPI(yourscore);
    } else {
      ticking.play();
      sec--;
    }
  }, 1000);
}

endchallenge.addEventListener("click", () => {
  endtimepop.classList.remove("open");
  btnrefresh();
  document.getElementById("blackBG").style.opacity = opacitynumber = "0";
  document.getElementById("blackBG").style.zIndex = 997;
});

let params = new URLSearchParams(window.location.search);
let Youname = params.get("Youname");
// let date = new Date()
const date = new Date();
var datetime =
  ("0" + date.getUTCDate()).slice(-2) +
  "-" +
  ("0" + (date.getUTCMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getUTCFullYear()+43)).slice(-2) +
  " " +
  ("0" + (date.getUTCHours() + 7)).slice(-2) +
  ":" +
  ("0" + date.getUTCMinutes()).slice(-2) 

console.log(datetime);

function calAPI(yourscore) {
  fetch(
    `https://script.google.com/macros/s/AKfycbxG8DGsXm7hxJS61AUHAP1drK3qhZmfv6YMB2tNDuora-HqwDIxS1TJN9Z0QqFqugNU_w/exec?name=${Youname}&score=${yourscore}&date="${datetime}"`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("เกิดข้อผิดพลาด: " + error);
    });
}
