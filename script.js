// Progress bar animation
function animateProgressBar(elementId, targetWidth, duration) {
    var progressBar = document.getElementById(elementId);
    var width = 0;
    var interval = targetWidth / (duration / 10);
  
    var animation = setInterval(frame, 10);
  
    function frame() {
      if (width >= targetWidth) {
        clearInterval(animation);
      } else {
        width += interval;
        progressBar.style.width = width + "%";
      }
    }
  }
  
  // Call the animation function for each progress bar
  animateProgressBar("progress1", 80, 2000); // Progress bar 1: 80% width in 2000ms (2 seconds)
  animateProgressBar("progress2", 70, 1500); // Progress bar 2: 70% width in 1500ms (1.5 seconds)
  // Add more progress bars as needed
  