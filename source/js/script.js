$(document).ready(function() {
  $('.main-nav__toggle').click(function() {
      $(this).toggleClass('main-nav__toggle--close');
      $('.main-nav__list').toggle();
  });
});
