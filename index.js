function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

//Toggling the audio to play and pause

//AUDIO 1
const audioFile1 = document.getElementById("audioFile1");
const play1 = document.querySelector("#play1");
const pause1 = document.querySelector("#pause1");
let state1 = false;

function toggleAudio1() {
  if (state1 == false) {
    audioFile1.play();
    state1 = true;
    play1.classList.toggle("off");
    pause1.classList.toggle("off");
    console.log("It is now playing audio 1");
  } else {
    audioFile1.pause();
    state1 = false;
    play1.classList.toggle("off");
    pause1.classList.toggle("off");
    console.log("It has now paused on audio 1");
  }
}
//Volume
const volume1 = document.getElementById("volume1");
volume1.addEventListener("click", (event) => {
  audioFile1.volume = volume1.value;
  console.log(`volume changed to ${volume1.value}`);
});

//AUDIO 2
const audioFile2 = document.getElementById("audioFile2");
const play2 = document.querySelector("#play2");
const pause2 = document.querySelector("#pause2");
let state2 = false;

function toggleAudio2() {
  if (state2 == false) {
    audioFile2.play();
    state2 = true;
    play2.classList.toggle("off");
    pause2.classList.toggle("off");
    console.log("It is now playing audio 2");
  } else {
    audioFile2.pause();
    state2 = false;
    play2.classList.toggle("off");
    pause2.classList.toggle("off");
    console.log("It has now paused on audio 2");
  }
}
//Volume
const volume2 = document.getElementById("volume2");
volume2.addEventListener("click", (event) => {
  audioFile2.volume = volume2.value;
  console.log(`volume changed to ${volume2.value}`);
});

//AUDIO 3
const audioFile3 = document.getElementById("audioFile3");
const play3 = document.querySelector("#play3");
const pause3 = document.querySelector("#pause3");
let state3 = false;

function toggleAudio3() {
  if (state3 == false) {
    audioFile3.play();
    state3 = true;
    play3.classList.toggle("off");
    pause3.classList.toggle("off");
    console.log("It is now playing audio 3");
  } else {
    audioFile3.pause();
    state3 = false;
    play3.classList.toggle("off");
    pause3.classList.toggle("off");
    console.log("It has now paused on audio 3");
  }
}
//Volume
const volume3 = document.getElementById("volume3");
volume3.addEventListener("click", (event) => {
  audioFile3.volume = volume3.value;
  console.log(`volume changed to ${volume3.value}`);
});

//Mute toggle
// function mute() {
//   if (audioFile.volume > 0) {
//     audioFile.volume = 0;
//     volume.value = 0;
//   }
// }
