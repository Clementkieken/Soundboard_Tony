var jawsButton = document.getElementById('jaws')

jawsButton.addEventListener('click', play)

function play() {
    var audio = new Audio('https://www.youtube.com/watch?v=2J6IA5T7RTs');
    audio.play();
  }

  <button onclick="play()">Play Audio</button>