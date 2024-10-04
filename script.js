// Fade-in animation for the poem text
document.addEventListener("DOMContentLoaded", function() {
  const poem = document.getElementById("poem");
  poem.style.opacity = 0;
  let opacity = 0;
  
  function fadeIn() {
      opacity += 0.02; // Adjust this value to control the speed of the fade-in
      if (opacity <= 1) {
          poem.style.opacity = opacity;
          requestAnimationFrame(fadeIn); // Smoothly increase opacity
      }
  }

  fadeIn();
});

// Play music when the page is clicked
document.addEventListener('click', function() {
  const audio = document.getElementById('backgroundMusic');
  if (audio.paused) {
      audio.play();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const loadSketchButton = document.getElementById('loadSketchButton');
  
  // Initially, the sketch container is hidden
  const sketchContainer = document.getElementById('sketch-container');
  sketchContainer.style.display = 'none';
  
  // When the button is clicked, show the sketch container and load the p5.js sketch
  loadSketchButton.addEventListener('click', function() {
      sketchContainer.style.display = 'block'; // Show the sketch container
  });
});

document.addEventListener('click', function() {
  const audio = document.getElementById('bornToDieAudio');
  if (audio.paused) {
      audio.play().catch(error => {
          console.log("Error playing audio: ", error);
      });
  }
});

