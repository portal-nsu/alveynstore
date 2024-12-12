// Toggle the circular navbar when the FAB is clicked
function toggleMenu() {
  const circularNavbar = document.getElementById('circularNavbar');
  const fabIcon = document.getElementById('fabIcon');
  circularNavbar.classList.toggle('open');

  // Animate the FAB icon (cross) when the menu opens
  if (circularNavbar.classList.contains('open')) {
    fabIcon.innerHTML = '&#10005;'; // Change to cross icon when menu is open
    fabIcon.style.transform = 'rotate(45deg)'; // Smooth rotation for the icon
    fabIcon.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Add smooth transition
  } else {
    fabIcon.innerHTML = '&#43;'; // Revert to plus icon
    fabIcon.style.transform = 'rotate(0deg)'; // Revert rotation
    fabIcon.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Add smooth transition
  }
}

// Smooth scroll to top for "Home" option
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
document.querySelectorAll('.nav-option').forEach(navOption => {
  navOption.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Remove any existing highlights
      document.querySelectorAll('section').forEach(section => {
        section.style.outline = 'none';
      });

      // Apply highlight to the target section
      targetSection.style.outline = '2px solid #25D366';

      // Remove the highlight after 2 seconds
      setTimeout(() => {
        targetSection.style.outline = 'none';
      }, 2000);

      // Scroll smoothly to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
function filterCategory(category) {
  alert(`You selected the category: ${category}`);
  // Future enhancement: Implement dynamic filtering for products by category.
}
function navigateToSection(sectionId) {
  // Scroll to the specific section
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });

  // Add highlight animation
  section.classList.add('highlight');
  setTimeout(() => {
    section.classList.remove('highlight');
  }, 2000);
}

