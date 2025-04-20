const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");

// Load saved image on page load
window.onload = function() {
  const savedImage = localStorage.getItem("savedPhoto");
  if (savedImage) {
    imagePreview.src = savedImage;
  }
};

// Save new uploaded image
fileInput.addEventListener("change", function() {
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      imagePreview.src = imageData;
      localStorage.setItem("savedPhoto", imageData); // Save image as base64
    };
    reader.readAsDataURL(file);
  }
});