document.getElementById('searchButton').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const sections = {
    hoodie: 'Hoodie',
    jacket: 'Jacket',
    shacket: 'Shacket',
    sneakers: 'Sneakers',
    tshirts: 'T-Shirts',
    shirts: 'Shirts',
  };

  // Find the matching section
  const sectionId = Object.keys(sections).find(key =>
    sections[key].toLowerCase().includes(searchInput)
  );

  if (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.classList.add('highlight');
      setTimeout(() => {
        section.classList.remove('highlight');
      }, 2000);
    }
  } else {
    alert('Category not found. Please try again.');
  }
});
