// This listens to the dropdown on index.html and navigates to the chosen page.
const picker = document.getElementById('pagePicker');

// If the element exists (it will on index.html), wire it up
if (picker) {
  picker.addEventListener('change', function () {
    const file = picker.value; // e.g., "index.html"
    if (file) {
      // Go to that file
      window.location.href = file;
    }
  });
}

// NOTE: If you previously used showPage() for single-page switching,
// you don't need it anymore since each page is its own HTML file now.
// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Lazy Loading for Images
  const images = document.querySelectorAll('img[src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // Close sidebar when clicking on a link
  const navLinks = document.querySelectorAll('#main-nav a');
  const menuToggle = document.getElementById('menu-toggle');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });

  // Close sidebar with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});