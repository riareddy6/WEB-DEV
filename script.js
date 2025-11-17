// This listens to the dropdown on index.html and navigates to the chosen page.
const picker = document.getElementById('pagePicker');

// If the element exists (it will on index.html), wire it up
if (picker) {
  picker.addEventListener('change', function () {
    const file = picker.value; // e.g., "homepage.html"
    if (file) {
      // Go to that file
      window.location.href = file;
    }
  });
}

// NOTE: If you previously used showPage() for single-page switching,
// you don't need it anymore since each page is its own HTML file now.
