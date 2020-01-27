var burger = document.querySelector('.page-header__burger');
var crossClose = document.querySelector('.page-header__cross');
var menuList = document.querySelector('.page-header__list');
var changeColor = document.querySelector('.page-header__menu-upper');
burger.addEventListener('click', function(event) {
  event.preventDefault;
  menuList.classList.remove('page-header__list');
  menuList.classList.add('menu__list');
  burger.classList.remove('page-header__burger');
  burger.classList.add('page-header__burger-close');
  crossClose.classList.remove('page-header__cross');
  crossClose.classList.add('main-nav__toggle--cross');
  changeColor.classList.add('upper--open-color');
  var cross = document.querySelector('.main-nav__toggle--cross');
  var menuListOpen = document.querySelector('.menu__list');
  var closeColor = document.querySelector('.upper--open-color');
  cross.addEventListener('click', function(event) {
    event.preventDefault;
    menuListOpen.classList.remove('menu__list');
    menuListOpen.classList.add('page-header__list');
    burger.classList.remove('page-header__burger-close');
    burger.classList.add('page-header__burger');
    cross.classList.remove('main-nav__toggle--cross');
    cross.classList.add('page-header__cross');
    closeColor.classList.remove('upper--open-color');
  });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides__slide");
  var dots = document.getElementsByClassName("slider__dots");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
document.querySelectorAll('.desktop-link').forEach(function(el) {
  if(window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
    el.classList.add('active-desktop-link');
  }
});
