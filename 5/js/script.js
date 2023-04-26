let headerMain = document.querySelector('.main-header');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mapIframe = document.querySelector('iframe.map__iframe');

headerMain.classList.remove('main-header--nojs');
mapIframe?.classList.remove('map__iframe--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
