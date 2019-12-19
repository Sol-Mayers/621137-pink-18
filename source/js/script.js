var burger = document.querySelector('.main-nav__toggle--burger');
var crossClose = document.querySelector('.main-nav__toggle--cross-close');
var menuList = document.querySelector('.menu__list-close');
var changeColor = document.querySelector('.list__item--upper');

burger.addEventListener('click', function (event) {
  event.preventDefault;
  menuList.classList.remove('menu__list-close');
  menuList.classList.add('menu__list');
  burger.classList.remove('main-nav__toggle--burger');
  burger.classList.add('main-nav__toggle--burger-close');
  crossClose.classList.remove('main-nav__toggle--cross-close');
  crossClose.classList.add('main-nav__toggle--cross');
  changeColor.classList.add('upper--open-color');
  var cross = document.querySelector('.main-nav__toggle--cross');
  var menuListOpen = document.querySelector('.menu__list');
  var closeColor = document.querySelector('.upper--open-color');

  cross.addEventListener('click', function (event) {
    event.preventDefault;
    menuListOpen.classList.remove('menu__list');
    menuListOpen.classList.add('menu__list-close');
    burger.classList.remove('main-nav__toggle--burger-close');
    burger.classList.add('main-nav__toggle--burger');
    cross.classList.remove('main-nav__toggle--cross');
    cross.classList.add('main-nav__toggle--cross-close');
    closeColor.classList.remove('upper--open-color');
  });
});



