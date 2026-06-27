const images = [
  { src: "Image16.jpg", caption: "first lean ;)" }
];

function toggleEnvelope(id) {
  document.getElementById(id).classList.toggle("open");
}

function openLightbox(index) {
  document.getElementById("lightbox").classList.add("active");
  document.getElementById("lightboxImg").src = images[index].src;
  document.getElementById("lightboxCaption").textContent = images[index].caption;
}

function closeLightbox(e) {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("active");
  }
}

function closeLightboxBtn() {
  document.getElementById("lightbox").classList.remove("active");
}
