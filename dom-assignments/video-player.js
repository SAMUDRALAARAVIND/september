const video = document.getElementById("video");
const progressBar = document.getElementById("progress-bar");
const playPauseButton = document.getElementById("play-pause");
const timer = document.getElementById("timer");
const duration = document.getElementById("duration");
const progress = document.getElementById("progress");

video.addEventListener("loadeddata", () => {
  duration.innerText = `${parseInt(video.duration)}s`;
});

progress.addEventListener("click", (e) => {
  const position = e.clientX - 20;
  const percentage = position / progress.clientWidth;

  const currentTime = percentage * video.duration;
  video.currentTime = currentTime;
});

video.addEventListener("ended", () => {
  playPauseButton.innerText = "play_arrow";
});
/**
 *
 * Options
 * progress-bar
 * play - pause button
 * timer display
 * volume control
 * fast forward
 * backward
 */
// timeupdate event which can applied for video/audio elements.
playPauseButton.addEventListener("click", (e) => {
  if (playPauseButton.innerText === "play_arrow") {
    // we need to play the video
    playPauseButton.innerText = "pause";
    video.play();
  } else {
    // we need to pause the video.
    playPauseButton.innerText = "play_arrow";
    video.pause();
  }
});

video.addEventListener("timeupdate", () => {
  const totalTime = video.duration;
  const currentTime = video.currentTime;
  const percentageCovered = (currentTime / totalTime) * 100;

  progressBar.style.width = `${percentageCovered}%`;
  timer.innerText = `${parseInt(currentTime)}s`;
});

// video.play();

function forward() {
  video.currentTime += 3;
}

function backward() {
  video.currentTime -= 3;
}
