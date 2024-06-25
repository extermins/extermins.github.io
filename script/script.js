document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.header');
  let height_line = window.innerHeight - 100;

  const checkScroll = () => {
      if (window.scrollY >= height_line) {
          nav.style.visibility = 'visible';
          nav.style.opacity = '1';
          nav.style.transform = 'translateY(0)';
          console.log("스크롤 :" +window.scrollY);
      } else {
          nav.style.visibility = 'hidden';
          nav.style.opacity = '0';
          nav.style.transform = 'translateY(-100%)';
      }
  };

  checkScroll();

  window.addEventListener('scroll', checkScroll);

  window.addEventListener('resize', () => {
      height_line = window.innerHeight - 1;
      checkScroll();
  });
});


let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        if (index >= totalSlides) { slideIndex = 0; }
        if (index < 0) { slideIndex = totalSlides - 1; }

        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    }

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    showSlide(slideIndex);

