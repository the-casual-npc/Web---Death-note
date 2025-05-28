let playing = true;
const img = document.getElementById('mute');
const aud = document.getElementById('audio');

function play() {
  if (playing) {
    img.src = "obrazky/unMuted.png";
    aud.play();
  } else {
    img.src = "obrazky/muted.png";
    aud.pause();
  }
  playing = !playing;
}

const kira = document.getElementById("kira");
const l = document.getElementById("l");
const zpet = document.getElementById("back");

const nadpisK = document.getElementById("nadpis");
const popis1 = document.getElementById("popis");
const obrK = document.getElementById("img");

const nadpisL = document.getElementById("nadpisL");
const popis2 = document.getElementById("popis2");
const obrL = document.getElementById("imgL");

function popisK() {
  l.style.display = "none";
  kira.style.transition = "0s";
  kira.style.width = "70vw";
  kira.style.justifyContent = "left";
  nadpisK.style.display = "none";
  popis1.style.display = "block";
  obrK.style.margin = "1vw";
  zpet.style.display = "block";
  kira.classList.remove(`no-hover`);
}

function popisL() {
  kira.style.display = "none";
  l.style.transition = "0s";
  l.style.width = "70vw";
  l.style.justifyContent = "right";
  nadpisL.style.display = "none";
  popis2.style.display = "block";
  zpet.style.display = "block";
  obrL.style.margin = "1vw";
  l.classList.remove(`no-hover`);
}

function back() {
  zpet.style.display = "none";
  kira.style.display = "flex";
  l.style.display = "flex";
  kira.style.width = "35vw";
  l.style.width = "35vw";
  kira.style.justifyContent = "center";
  l.style.justifyContent = "center";
  nadpisK.style.display = "block";
  nadpisL.style.display = "block";
  obrK.style.margin = "0";
  obrL.style.margin = "0";
  nadpisK.style.display = "block";
  nadpisL.style.display = "block";
  popis1.style.display = "none";
  popis2.style.display = "none";

  l.classList.add(`no-hover`);
  kira.classList.add(`no-hover`);

  setTimeout(function() {
    kira.style.transition = "0.2s";
    l.style.transition = "0.2s";
}, 1);
}