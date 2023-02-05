var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
const video_html = document.querySelector("html");

function stopVideo() {
  videoPlayer.style.display = "none";
  video_html.classList.toggle("active");
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
  video_html.classList.toggle("active");
}