document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.header');
  let height_line = window.innerHeight - 100;

  const checkScroll = () => {
      if (window.scrollY >= height_line) {
          nav.style.visibility = 'visible';
          nav.style.opacity = '1';
          nav.style.transform = 'translateY(0)';
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

