$(function() {
  $('.aright').click(function(){
    $('.menu-arrow.aleft').removeClass('sr-only');
    $('.menu-arrow.aright').addClass('sr-only');
    $('.sidenav').addClass('sidenav-active');
    $('.head-content').addClass('move-head');

  })
  $('.aleft').click(function(){
    $('.menu-arrow.aright').removeClass('sr-only');
    $('.menu-arrow.aleft').addClass('sr-only');
    $('.sidenav').removeClass('sidenav-active');
    $('.head-content').removeClass('move-head');

  })
});
