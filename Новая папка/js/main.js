$(".header-menu-icon").click(function(){
  $(".mobile-block").toggleClass('mobile-pos')
  // $(".mobile-block").slideToggle(300)
});
$(".owl-carousel").owlCarousel({
  items:1,
  dots:true
});
// $(".owl-dot").click(function(){
//   $(".owl-dot").removeClass("act");
//   $(this).addClass("act");
// });
// if($(".owl-dot").hasClass("actie")){
//   console.log("$(this)");
// }

$(".amenities-menu__item").click(function(){
  $(".amenities-menu__item").removeClass( "amenities-menu__item_active" );
  $(this).addClass( "amenities-menu__item_active" );
  var elem = $(this).attr("data-id");

  $(".amenities-item").addClass( "none" );
  $(elem).removeClass("none");
});

$(".our-works_menu__item").click(function(){
  $(".our-works-container").addClass( "none" );
  var elemw = $(this).attr("data-id");
  $(elemw).removeClass("none");
});
$(".side-bar_item").click(function(){
  $(".mob-slider").addClass( "none" );
  var elemm = $(this).attr("data-id");
  $(elemm).removeClass("none");
  $(".side-bar").removeClass("mobile-pos");
  $(".mobile-block").removeClass("mobile-pos");
});

$(".ws_item").click(function(){
  var wsItemSrc = $(this).attr("src");
  $(".modal-img").animate({
    'opacity':'0'
  },200);
    $(".modal-img").attr("src",wsItemSrc);
  $(".modal-img").animate({
    'opacity':'1'
  },200);
});

 $(".trigger").click(function(){
   $(".side-bar").toggleClass('mobile-pos');
 });
$(".close_item").click(function(){
    $(".side-bar").removeClass("mobile-pos");
    $(".mobile-block").removeClass("mobile-pos");
});
$('a[href^="#berth"], *[data-href^="#berth"]').on('click', function(e){
        e.preventDefault();
        var t = 700;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
$(".turnkey-back_btn").click(function(){
  $(".more-info").slideUp(200);
  var infoBlock = $(this).attr("data-id");
  $(infoBlock).slideToggle(200);
});