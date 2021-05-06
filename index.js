function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

//Toggling the audio to play and pause
const playButton = document.getElementById("playbutton");
const audioFile = document.getElementById("audioFile");
let state = false;

function toggleAudio() {
  if (state == false) {
    audioFile.play();
    state = true;
  } else {
    audioFile.pause();
    state = false;
  }
}
//Volume
const volume = document.getElementById("volume");
volume.addEventListener("click", (event) => {
  audioFile.volume = volume.value;
  console.log(`volume changed to ${volume.value}`);
});
//Mute toggle
// function mute() {
//   if (audioFile.volume > 0) {
//     audioFile.volume = 0;
//     volume.value = 0;
//   }
// }
