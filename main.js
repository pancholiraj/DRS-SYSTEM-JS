// video
const decisionVideo = document.querySelector(".displayVidImg");
const decisionImg = document.querySelector(".displayVidImg");

// buttons

const decisionPending = document.querySelector(".decisionPendingBtn");
const notOut = document.querySelector(".notOut");
const out = document.querySelector(".out");
const playVideo = document.querySelector(".playPauseVideo");
const pauseVideo = document.querySelector(".pauseVideo");
const prevSec = document.querySelector(".prevSec");
const nextSec = document.querySelector(".nextSec");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");

// logic

// play buttons to play video
isClicked = true;
isChecking = false;
playVideo.addEventListener("click", () => {
  if (!isChecking) {
    decisionVideo.src = "./Assets/dhoni run out.mp4";
  }

  if (isClicked) {
    decisionVideo.play();
    decisionVideo.playbackRate = 1;
    isClicked = false;
  } else {
    decisionVideo.pause();
    decisionVideo.playbackRate = 1;
    isClicked = true;
  }
  console.log("clicked");
});

// prev video sec
prevSec.addEventListener("click", () => {
  console.log("clicked");
  decisionVideo.playbackRate = 0.1;
  decisionVideo.currentTime -= 0.05;
  isClicked = true;
  isChecking = true;
});
// next video sec
nextSec.addEventListener("click", () => {
  isClicked = true;
  isChecking = true;
  console.log("clicked");
  decisionVideo.playbackRate = 0.1;
  decisionVideo.currentTime += 0.1;
});

// changing display according to the decision

out.addEventListener("click", () => {
  decisionVideo.src = "./Assets/Out.mp4";
  decisionVideo.play();
  isChecking = false;
});

notOut.addEventListener("click", () => {
  isChecking = false;
  decisionVideo.src = "./Assets/Not Out.mp4";
  decisionVideo.play();
});

decisionPending.addEventListener("click", () => {
  isChecking = false;
  decisionVideo.src = "./Assets/DECISION Pending.mp4";
  decisionVideo.play();
});

start.addEventListener("click", () => {
  isChecking = false;
  console.log("clicked");
  decisionVideo.src = "./Assets/dhoni run out.mp4";
});
restart.addEventListener("click", () => {
  isChecking = false;
  console.log("clicked");
  decisionVideo.src = "./Assets/drsHome.mp4";
});
