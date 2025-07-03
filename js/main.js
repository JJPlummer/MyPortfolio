window.addEventListener('DOMContentLoaded', () => {
  // === NAVBAR INJECTION ===
  fetch('../navbar.html')
    .then(res => res.text())
    .then(data => {
      const placeholder = document.getElementById('navbar-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    });

  // Slideshow initialization
  slideIndex = 1;
  showSlides(slideIndex);

  // === MODAL IMAGE LOGIC ===
  const img = document.getElementById('senior-project-poster');
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close-modal');

  if (img && modal && modalImg && closeBtn) {
    img.onclick = function() {
      modal.classList.remove('hidden');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    };
    closeBtn.onclick = function() {
      modal.classList.add('hidden');
    };
    modal.onclick = function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    };
  }
});

// === PDF TOGGLE ===
function togglePDF(id) {
  const pdfViewer = document.getElementById(id);
  if (pdfViewer) {
    pdfViewer.classList.toggle("hidden");
  }
}

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return; // <-- Add this line
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}