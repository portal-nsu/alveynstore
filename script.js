document.addEventListener("DOMContentLoaded", () => {
  const colorCircles = document.querySelectorAll(".color-circle");
  const productImages = document.querySelectorAll(".product-image");

  colorCircles.forEach(circle => {
    circle.addEventListener("click", () => {
      const color = circle.dataset.color;

      // Remove highlight from all images
      productImages.forEach(img => img.classList.remove("highlight"));

      // Highlight the image matching the clicked color
      const matchingImage = document.querySelector(`.product-image[data-color="${color}"]`);
      if (matchingImage) {
        matchingImage.classList.add("highlight");
      }
    });
  });
});
