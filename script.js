document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('header nav ul');

    if (!menuIcon) {
        console.error('Menu icon not found!');
        return;
    }

    if (!navUl) {
        console.error('Navigation menu not found!');
        return;
    }

    // Toggle the navigation menu on mobile
    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        if (navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            navUl.classList.add('inactive'); // Trigger zoom-out
            setTimeout(() => navUl.classList.remove('inactive'), 300); // Remove inactive after animation
        } else {
            navUl.classList.remove('inactive'); // Ensure inactive class is removed before zoom-in
            navUl.classList.add('active');
        }
        menuIcon.classList.toggle('open'); // Toggle 'open' class for animation
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !navUl.contains(event.target)) {
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                navUl.classList.add('inactive'); // Trigger zoom-out
                setTimeout(() => navUl.classList.remove('inactive'), 300); // Remove inactive after animation
                menuIcon.classList.remove('open');
            }
        }
    });

    // Close the menu when clicking on a menu item
    navUl.addEventListener('click', () => {
        if (navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            navUl.classList.add('inactive'); // Trigger zoom-out
            setTimeout(() => navUl.classList.remove('inactive'), 300); // Remove inactive after animation
            menuIcon.classList.remove('open');
        }
    });

    // Allow keyboard accessibility for menu icon
    menuIcon.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navUl.classList.toggle('active');
            menuIcon.classList.toggle('open');
        }
    });

    // Smooth scrolling for all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Scroll to the section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for "Book Now" button
    const bookNowButton = document.querySelector('.book-now');
    if (bookNowButton) {
        bookNowButton.addEventListener('click', function() {
            const targetSection = document.getElementById('tours'); // Adjust target as needed
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Scroll header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = '-120px'; // Hide header (adjust value as needed)
    } else {
        // Scroll Up
        header.style.top = '0'; // Show header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

document.getElementById('submitbtn').addEventListener('click', function() {
            alert('Thank You ! You will have a happy and comfortable journey');
        });
        
// Get modal element
var modal = document.getElementById("about-us-modal");

// Get the button that opens the modal
var btn = document.getElementById("about-us-menu");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add('show'); // Add show class for animation
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('show'); // Remove show class for animation
  setTimeout(() => { modal.style.display = "none"; }, 300); // Wait for animation to finish before hiding
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show'); // Remove show class for animation
    setTimeout(() => { modal.style.display = "none"; }, 300); // Wait for animation to finish before hiding
  }
}