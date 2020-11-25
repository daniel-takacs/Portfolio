
AOS.init({
  easing: "ease",
  duration: 1800,
  once: true
});

const menuToggler = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
const navLink = document.querySelectorAll('.nav-link');

menuToggler.addEventListener('click', () => {
  menuToggler.classList.toggle('open');
  topNav.classList.toggle('open');
})

topNav.addEventListener('click', () => {
  menuToggler.classList.toggle('open');
  topNav.classList.toggle('open');
})
navLink.addEventListener('click', () => {
  menuToggler.classList.toggle('open');
  topNav.classList.toggle('open');
})

  
/*$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
  });
});*/