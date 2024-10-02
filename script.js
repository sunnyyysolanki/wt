window.onload = function() {
    const birthdaySong = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');
  
    // Play sound when the button is clicked
    playButton.addEventListener('click', () => {
      birthdaySong.play();
    });
  };
  