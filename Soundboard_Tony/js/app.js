// Music pour Jaws
var jawsButton = document.getElementById('jaws');

function playJaws() {
    var audio = new Audio('../ressources/jaws_theme.mp3');
    audio.play();
  }

jawsButton.addEventListener('click', playJaws);

// Music pour l'elevator
var elevatorButton = document.getElementById('elevator');

function playElevator() {
    var audio = new Audio('../ressources/elevator.mp3');
    audio.play();
  }

elevatorButton.addEventListener('click', playElevator);

console.log()
