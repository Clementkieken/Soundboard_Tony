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
