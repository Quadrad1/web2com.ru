$(document).ready(function() {
  console.log(navPos);
  var navPos, winPos;
  function refreshVar() {
    navPos = $('.menu-responce').offset().top;
  }

  refreshVar();
  $(window).resize(refreshVar);

  $(window).scroll(function() {
    winPos = $(window).scrollTop();
    if (winPos >= navPos) {
      $(".fixed-menu-responce").addClass(".fixed-menu-responce-active");
    }
    else {
      $(".fixed-menu-responce").removeClass(".fixed-menu-responce-active");
    }
  });

});
