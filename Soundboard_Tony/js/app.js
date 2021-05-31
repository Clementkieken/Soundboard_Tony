// Initializing 

// Music pour Jaws
var jawsButton = document.getElementById('jawsThumbnail');

function playJaws() {
    let audio = new Audio('../ressources/jaws_theme.mp3');
    audio.play();
  }

jawsButton.addEventListener('click', playJaws);

// Music pour l'elevator
var elevatorButton = document.getElementById('elevatorThumbnail');

function playElevator() {
    let audio = new Audio('../ressources/elevator.mp3');
    audio.play();
  }

elevatorButton.addEventListener('click', playElevator);

console.log()

// Music pour Qui veut Gagner des Millions
var millionsButton = document.getElementById('millionsThumbnail');

function playMillions() {
    let audio = new Audio('../ressources/millions_theme.mp3'); // '../ressources/' + variable;
    audio.play();
  }

millionsButton.addEventListener('click', playMillions);

// Music pour Baby Shark
var babySharkButton = document.getElementById('babySharkThumbnail');

function playBabyShark() {
    let audio = new Audio('../ressources/BabyShark_cut_theme.mp3'); // '../ressources/' + variable;
    audio.play();
  }

babySharkButton.addEventListener('click', playBabyShark);

// Music pour Dun Dun Duuuuun
var dunButton = document.getElementById('dunThumbnail');

function playDun() {
    let audio = new Audio('../ressources/dun.mp3'); // '../ressources/' + variable;
    audio.play();
  }

dunButton.addEventListener('click', playDun);

// Music pour badum
var badumButton = document.getElementById('badumThumbnail');

function playBadum() {
    let audio = new Audio('../ressources/badum.mp3'); // '../ressources/' + variable;
    audio.play();
  }

badumButton.addEventListener('click', playBadum);






