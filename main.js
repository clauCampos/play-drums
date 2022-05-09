"use strict";

const crashBtn = document.querySelector("#crash-btn");
const hihatOpenBtn = document.querySelector("#hihat-open-btn");
const hihatCloseBtn = document.querySelector("#hihat-close-btn");
const kickBtn = document.querySelector("#kick-btn");
const rideBtn = document.querySelector("#ride-btn");
const snareBtn = document.querySelector("#snare-btn");
const tomHighBtn = document.querySelector("#tom-high-btn");
const tomMidBtn = document.querySelector("#tom-mid-btn");
const tomLowBtn = document.querySelector("#tom-low-btn");

crashBtn.addEventListener("click", delaySound);
hihatOpenBtn.addEventListener("click", delaySound);
hihatCloseBtn.addEventListener("click", delaySound);
kickBtn.addEventListener("click", delaySound);
rideBtn.addEventListener("click", delaySound);
snareBtn.addEventListener("click", delaySound);
tomHighBtn.addEventListener("click", delaySound);
tomMidBtn.addEventListener("click", delaySound);
tomLowBtn.addEventListener("click", delaySound);

const validInputKeys = new Map();
validInputKeys.set(65, "./sounds/crash.wav");
validInputKeys.set(83, "./sounds/hihat-open.wav");
validInputKeys.set(68, "./sounds/hihat-close.wav");
validInputKeys.set(70, "./sounds/kick.wav");
validInputKeys.set(71, "./sounds/ride.wav");
validInputKeys.set(72, "./sounds/snare.wav");
validInputKeys.set(74, "./sounds/tom-high.wav");
validInputKeys.set(75, "./sounds/tom-mid.wav");
validInputKeys.set(76, "./sounds/tom-low.wav");

function getSoundSource(event) {
  let soundSource;
  const pressedKey = event.keyCode;

  if (validInputKeys.has(pressedKey)) {
    soundSource = validInputKeys.get(pressedKey);
    return soundSource;
  } else if (event.key && !validInputKeys.has(pressedKey)) {
    const error = new ReferenceError("Pressed key is not valid");
    alert("Pressed key is not valid");
    throw error;
  } else {
    const targetButton = event.target;
    soundSource = targetButton.dataset.sound;
    return soundSource;
  }
}

function playWithKeyOrButton(event) {
  try {
    const soundSrc = getSoundSource(event);
    const audio = new Audio(soundSrc);
    audio.play();
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener("keydown", delaySound);

function delaySound(event) {
  setTimeout(playWithKeyOrButton, 1000, event);
}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);