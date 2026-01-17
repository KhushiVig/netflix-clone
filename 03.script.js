const modal = document.getElementById("videoModal");
const video = document.getElementById("trailer");
const playBtn = document.getElementById("playBtn");
const closeBtn = document.getElementById("closeBtn");

playBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeVideo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});

function closeVideo() {
  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
