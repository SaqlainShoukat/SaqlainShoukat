    // JavaScript to toggle submenu visibility
    document.addEventListener("DOMContentLoaded", function() {
      // Get the element that toggles the submenu
      const servicesLink = document.querySelector('.services-dropdown > a');
      // Get the submenu itself
      const submenu = document.querySelector('.services-dropdown > .submenu');

      // Add event listener to toggle submenu visibility
      servicesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link
        submenu.classList.toggle('show'); // Toggle the 'show' class on the submenu
      });
    });
    
    
       // JavaScript to toggle submenu visibility
    document.addEventListener("DOMContentLoaded", function() {
      // Get the element that toggles the submenu
      const servicesLink = document.querySelector('.services-dropdown2 > a');
      // Get the submenu itself
      const submenu = document.querySelector('.services-dropdown2 > .submenu2');

      // Add event listener to toggle submenu visibility
      servicesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link
        submenu.classList.toggle('show'); // Toggle the 'show' class on the submenu
      });
    });
    
         // JavaScript to toggle submenu visibility
    document.addEventListener("DOMContentLoaded", function() {
      // Get the element that toggles the submenu
      const servicesLink = document.querySelector('.services-dropdown3 > a');
      // Get the submenu itself
      const submenu = document.querySelector('.services-dropdown3 > .submenu3');

      // Add event listener to toggle submenu visibility
      servicesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link
        submenu.classList.toggle('show'); // Toggle the 'show' class on the submenu
      });
    });
    
             // JavaScript to toggle submenu visibility
    document.addEventListener("DOMContentLoaded", function() {
      // Get the element that toggles the submenu
      const servicesLink = document.querySelector('.services-dropdown4 > a');
      // Get the submenu itself
      const submenu = document.querySelector('.services-dropdown4 > .submenu4');

      // Add event listener to toggle submenu visibility
      servicesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link
        submenu.classList.toggle('show'); // Toggle the 'show' class on the submenu
      });
    });
  

//for navigation bar:-
document.addEventListener('DOMContentLoaded', function() {
  var burgerImage = document.querySelector('.nimg');
  var navbar = document.querySelector('.sidebar');

  // Hide navbar initially
  navbar.style.display = 'none';

  // Toggle navbar visibility when burger image is clicked
  burgerImage.addEventListener('click', function() {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initial setup
    let currentSection = 1; // Start with upper-img1 and startup1

    // Function to switch sections
    function switchSections() {
        // Hide all sections
        const sections = document.querySelectorAll('.upper-img');
        const startups = document.querySelectorAll('.startup');
        
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Increment current section index
        currentSection++;

        // Loop back to the first section after the last one
        if (currentSection > sections.length) {
            currentSection = 1;
        }

        // Display the current section
        sections[currentSection - 1].style.display = 'block';
        startups[currentSection - 1].style.display = 'block';
    }

    // Call switchSections() initially
    switchSections();

    // Set interval to switch sections every 3 seconds
    setInterval(switchSections, 3000);
});
