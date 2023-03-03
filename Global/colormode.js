/*
const colorModeBtn = document.getElementById('color-mode-btn');
const originalText = colorModeBtn.textContent;

colorModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (colorModeBtn.textContent === originalText) {
        colorModeBtn.textContent = 'Light Theme';
      } else {
        colorModeBtn.textContent = originalText;
      }

    
});

*/
const colorModeBtn = document.getElementById('color-mode-btn');
const body = document.body;
const originalText = colorModeBtn.textContent;

// Check if color mode preference is saved in localStorage
if (localStorage.getItem('colorMode') === 'dark') {
  body.classList.add('dark-mode');
  colorModeBtn.textContent = 'Light Theme';
}

// Add event listener to color mode button
colorModeBtn.addEventListener('click', function() {
  // Toggle the dark-mode class on the body element
  body.classList.toggle('dark-mode');

  // Update the text content of the color mode button
  if (colorModeBtn.textContent === originalText) {
    colorModeBtn.textContent = 'Light Theme';
  } else {
    colorModeBtn.textContent = originalText;
  }

  // Save the color mode preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('colorMode', 'dark');
  } else {
    localStorage.setItem('colorMode', 'light');
  }
});