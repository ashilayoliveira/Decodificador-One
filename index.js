function decode() {
    const input = document.getElementById('input').value;
    const decodedText = atob(input);
    document.getElementById('output').innerText = decodedText;
  }
  
  const animatedButton = document.getElementById('animatedButton');

animatedButton.addEventListener('mouseover', function() {
  animatedButton.classList.add('animated');
});

animatedButton.addEventListener('animationend', function() {
  animatedButton.classList.remove('animated');
});
