let time;
let num;
const pop = document.querySelector("body");
const cat = document.querySelector("#imgCat");
const score = document.querySelector("#score");
const name = document.getElementById("Nametag");
const soundPOP = new Audio("./sound/pop-cat-original-meme_3ObdYkj.mp3");
localStorage.clickcount = 0; 

pop.addEventListener("mousedown", () => {
  document.getElementById("score").classList.add("active");
  openMouse();
});

pop.addEventListener("mouseup", () => {
  document.getElementById("score").classList.remove("active");
  closeMouse();
});

document.getElementById("score").innerHTML = localStorage.clickcount;

if (localStorage.clickcount < 100) {
  cat.src = "./images/colse.png";
} else {
  cat.src = "./images/closeV2.png";
  document.body.style.backgroundImage =
    "url('https://t4.ftcdn.net/jpg/03/08/66/67/360_F_308666761_bTFYmPovStrp8LlHRBpq2n4tlk61YjE0.jpg')";
}

function clickMouse() {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
  document.getElementById("score").innerHTML = localStorage.clickcount;
}

function openMouse() {
  soundPOP.play();
  clickMouse();
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
    document.body.style.backgroundImage =
      "url('https://t4.ftcdn.net/jpg/03/08/66/67/360_F_308666761_bTFYmPovStrp8LlHRBpq2n4tlk61YjE0.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100%";
  }
}

function btnrefresh() {
  localStorage.clickcount = 0;
  document.getElementById("score").innerHTML = localStorage.clickcount;
  cat.src = "./images/colse.png";
  document.body.style.backgroundRepeat = "none";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundImage =
    "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAOEAAEDAREAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAgMAAQQFBggH/8QAGgEBAQEBAQEBAAAAAAAAAAAAAgADAQQFBv/aAAwDAQACEAMQAAAA/P8A8191tHqSSYtt+Z6A50c+9Dz69DzLdTGJ1sa6a52dB29B6DXPoak6KhoqmhixiJcrNHAvRKLhLykJeWK+eq+Uz39hyX0bzX01eg0ugbURDxRpwyonKlSpRVRKxxFmA5dENVdWfbTKe1n2YlWk3QO1tHbaYsZasOvcHleajZJElyOtduiz1Z423aaxWfEvlkGZlNozEOPXX1Tlshsk8GNJPeyrDuo+1pxvZxmhO5CTiR5jNejP/8QAKxAAAQEHAgQGAwAAAAAAAAAAABIBAhARExRhFVEDIWKBBBcgMFOSUnGR/9oACAEBAAE/AECISKRTwUMFvkps2LUTFLS2c3LDpLRhYOiRMOfpT6UnIW7uw1zrPOXhfkz7Gp+P6jyte+I0Dhlr0li6U8Qn7KmZOQvJUgkmVBQppImdyngQ0ovbNP5BbMlbJVbBAmKSZ2EnLZgl0UKbkSIEQTCmJFExeRbBTScEwmJKZ2EsJCv2XeC5e+DiGteJ3c+p/8QAHREAAgMBAAMBAAAAAAAAAAAAABEBEBIgAhMhMP/aAAgBAgEBPwCkIUDrQ+FAhGRSLpCp8uByO9QO1BqaZ9/B9fRCgZqKQhRWoHJkcGpM2hCPp7fEcnrk3ApGPhjnhCilyhU6dIVf/8QAGxEAAgMBAQEAAAAAAAAAAAAAABEBECASITD/2gAIAQMBAT8Ay6QpyhnUU50x7Z6K0LLEe/FU5tQIUCH8VIxHU0xXzhHUac4VrPmXTHX/2Q==')";

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
