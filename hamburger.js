window.addEventListener('scroll', () => {
  const header = document.querySelector('nav');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const toggle = document.querySelectorAll('.toggler');
toggle.forEach((element) => element.addEventListener('click', () => {
  const menuToggle = document.querySelector('.menuToggle');
  const navigate = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigate.classList.toggle('active');
  if (window.innerWidth > 767) {
    navigate.classList.remove('active');
  }
}));