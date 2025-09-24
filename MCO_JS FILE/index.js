// Simple form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submit for demo
  alert('Thank you! Your message has been sent.');
  this.reset();
});
