let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  //bullshit.classList.remove("active");
};

var audio = new Audio("/icons/super30.mp3");
var isPlaying = false;

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}

audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};
