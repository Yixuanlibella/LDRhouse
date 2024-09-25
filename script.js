function playMusic(musicFile) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = musicFile;
    audioPlayer.play();
  }
  