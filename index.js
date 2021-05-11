function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
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

//AUDIO 4
const audioFile4 = document.getElementById("audioFile4");
const play4 = document.querySelector("#play4");
const pause4 = document.querySelector("#pause4");
let state4 = false;

function toggleAudio4() {
  if (state4 == false) {
    audioFile4.play();
    state4 = true;
    play4.classList.toggle("off");
    pause4.classList.toggle("off");
    console.log("It is now playing audio 4");
  } else {
    audioFile4.pause();
    state4 = false;
    play4.classList.toggle("off");
    pause4.classList.toggle("off");
    console.log("It has now paused on audio 4");
  }
}
//Volume
const volume4 = document.getElementById("volume4");
volume4.addEventListener("click", (event) => {
  audioFile4.volume = volume4.value;
  console.log(`volume changed to ${volume4.value}`);
});

//AUDIO 5
const audioFile5 = document.getElementById("audioFile5");
const play5 = document.querySelector("#play5");
const pause5 = document.querySelector("#pause5");
let state5 = false;

function toggleAudio5() {
  if (state5 == false) {
    audioFile5.play();
    state5 = true;
    play5.classList.toggle("off");
    pause5.classList.toggle("off");
    console.log("It is now playing audio 5");
  } else {
    audioFile5.pause();
    state5 = false;
    play5.classList.toggle("off");
    pause5.classList.toggle("off");
    console.log("It has now paused on audio 5");
  }
}
//Volume
const volume5 = document.getElementById("volume5");
volume5.addEventListener("click", (event) => {
  audioFile5.volume = volume5.value;
  console.log(`volume changed to ${volume5.value}`);
});

//Mute toggle
// function mute() {
//   if (audioFile.volume > 0) {
//     audioFile.volume = 0;
//     volume.value = 0;
//   }
// }
