// Función de cambiar imágenes
const images = [
  "assets/nosotros.jpeg",
  "assets/nosotros2.jpeg",
  "assets/nosotros3.jpeg",
  "assets/nosotros4.jpeg",
  "assets/nosotros5.jpeg",
  "assets/nosotros6.jpeg",
  "assets/nosotros7.jpeg",
  "assets/nosotros8.jpeg",
  "assets/nosotros9.jpeg",
];
let currentIndex = 0;
const image = document.getElementById("image");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});
