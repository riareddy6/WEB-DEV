//PAGE NAV
const picker = document.getElementById('pagePicker');

if (picker) {
  picker.addEventListener('change', function () {
    const file = picker.value; 
    if (file) {
      window.location.href = file;
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');

  if (backToTopButton) {
    // SHOW/HIDE FOR BUTTON
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // BUTTON CLICK
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // "LAZY LOAD" (IMG LOAD DELAY)
  // https://stackoverflow.com/questions/5117421/how-to-load-images-dynamically-or-lazily-when-users-scrolls-them-into-view
  // https://www.w3docs.com/snippets/javascript/lazy-load-images-with-javascript.html
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

  // MENU SELECTION CLOSES SIDE BAR
  const navLinks = document.querySelectorAll('#main-nav a');
  const menuToggle = document.getElementById('menu-toggle');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });

  // ESC KEY CLOSES SIDE BAR TOO
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});