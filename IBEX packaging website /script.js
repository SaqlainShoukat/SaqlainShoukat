//for navigation bar:-
document.addEventListener('DOMContentLoaded', function() {
  var burgerImage = document.querySelector('.burger-image');
  var navbar = document.querySelector('.navbar');

  // Hide navbar initially
  navbar.style.display = 'none';

  // Toggle navbar visibility when burger image is clicked
  burgerImage.addEventListener('click', function() {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
  });
});



//for screen scroll on click Get a Quote:-
document.addEventListener('DOMContentLoaded', function() {
  const getQuoteButton = document.querySelector('.btn1');
  const ppSection = document.querySelector('.get');

  getQuoteButton.addEventListener('click', function() {
    // Smooth scroll to the .pp section
    ppSection.scrollIntoView({ behavior: 'smooth' });

    // Highlight .pp section for 3 seconds
    ppSection.style.backgroundColor = 'red';
    setTimeout(function() {
      ppSection.style.backgroundColor = ''; // Reset background color
    }, 
    2000);
  });
});
