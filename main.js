// main.js - shared small scripts (nav active highlighting)
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === current) a.style.color = '#ffd166';
  });
});