let time;
let num;

const pop = document.querySelector("body");
const cat = document.querySelector("#imgCat");
const score = document.querySelector("#score");
const name = document.getElementById("Nametag");
const soundPOP = new Audio("./sound/pop-cat-original-meme_3ObdYkj.mp3");

pop.addEventListener("mousedown", openMouse);
pop.addEventListener("mouseup", closeMouse);

pop.addEventListener("touchstart", openMouse);
pop.addEventListener("touchend", closeMouse);

document.getElementById("score").innerHTML = localStorage.clickcount;

if (localStorage.clickcount < 100) {
  cat.src = "./images/colse.png";
} else {
  cat.src = "./images/closeV2.png";
}

function click() {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
  document.getElementById("score").innerHTML = localStorage.clickcount;
}

function openMouse() {
  soundPOP.play();
  click();

  if (localStorage.clickcount < 100) {
    cat.src = "./images/open.png";
  } else {
    cat.src = "./images/openV2.png";
  }
}

function closeMouse() {
  soundPOP.play();
  if (localStorage.clickcount < 100) {
    cat.src = "./images/colse.png";
  } else {
    cat.src = "./images/closeV2.png";
  }
}

function click() {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
  document.getElementById("score").innerHTML = localStorage.clickcount;
}

function btnrefresh() {
  localStorage.clickcount = 0;
  document.getElementById("score").innerHTML = localStorage.clickcount;
  cat.src = "./images/colse.png";
  clearInterval(time);
  showtime.innerHTML = null;
}

const opneBtn = document.getElementById("time");
const startBtn = document.getElementById("timestart");
const timepop = document.getElementById("timepop");

opneBtn.addEventListener("click", () => {
  timepop.classList.add("open");
});

startBtn.addEventListener("click", () => {
  timepop.classList.remove("open");
});

const btnX = document.getElementById("X");

btnX.addEventListener("click", () => {
  timepop.classList.remove("open");
});



const showtime = document.querySelector("#showtime");
let ticking = new Audio("./sound/tick.mp3");
const endchallenge = document.getElementById("endchallenge");

function starttime() {
  num = 30;
  let sec = 0;
  localStorage.clickcount = 0;
  document.getElementById("score").innerHTML = localStorage.clickcount;
  time = setInterval(() => {
    showtime.innerHTML = num + sec;
    const yourscore = localStorage.clickcount;
    if (sec < -20) {
      showtime.style.color = "red";
    } else {
      showtime.style.color = "white";
    }
    if (sec == -30) {
      showtime.innerHTML = null;
      clearInterval(time);
      endtimepop.classList.add("open");
      document.getElementById("showscore").innerHTML = yourscore;
  
    } else {
      ticking.play();
      sec--;
    }
  }, 1000);
}

endchallenge.addEventListener("click", () => {
  endtimepop.classList.remove("open");
  btnrefresh();
});

