window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('menuToggle');
    header.classList.toggle("sticky", window.scrollY > 0);
    hamburger.classList.add("sticky", window.scrollY > 0);

});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    const w = window.innerWidth;
if (window.innerWidth > 767) {
    navigation.classList.toggle('active');

}
}


