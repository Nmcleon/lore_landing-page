document.addEventListener("DOMContentLoaded", function() {
	let currentIndex = 0;
	const slides = document.querySelectorAll(".carousel-slide");
  
	function showSlide(index) {
	  slides.forEach((slide, i) => {
		slide.style.display = i === index ? "block" : "none";
	  });
	}
  
	function nextSlide() {
	  currentIndex = (currentIndex + 1) % slides.length;
	  showSlide(currentIndex);
	}
  
	function prevSlide() {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	  showSlide(currentIndex);
	}
  
	// Initial setup
	showSlide(currentIndex);
  
	// Auto slide change every 3 seconds (adjust as needed)
	setInterval(nextSlide, 3000);
  });
  