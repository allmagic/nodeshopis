$(function() {
  var url = window.location.pathname;
  var activePage = url.substring(url.lastIndexOf('/')+1);
  $('aside a').each(function(){
    var currentPage = this.href.substring(this.href.lastIndexOf('/')+1);

    if (activePage == currentPage) {
      $(this).find('li.list-group-item').addClass('item-active');
    }
  });

  $('.aright').click(function(){
    $('.menu-arrow.aleft').removeClass('sr-only');
    $('.menu-arrow.aright').addClass('sr-only');
    $('.sidenav').addClass('sidenav-active');
    $('.head-content .menu-arrow').addClass('move-head');

  })
  $('.aleft').click(function(){
    $('.menu-arrow.aright').removeClass('sr-only');
    $('.menu-arrow.aleft').addClass('sr-only');
    $('.sidenav').removeClass('sidenav-active');
    $('.head-content .menu-arrow').removeClass('move-head');

  })
});
