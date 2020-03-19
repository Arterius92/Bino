$('.home_slider').slick({
  fade: true,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: false,
  arrows: true
});

$('.service_slider').slick({
  fade: false,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: false,
  arrows: false,
  dots: true,
  vertical: true,
  verticalSwiping: true
});

$('.trip_img').fancybox({
  loop: true,
  buttons: [
    'zoom',
    'share',
    'slideShow',
    'fullScreen',
    'download',
    'thumbs',
    'close'
  ]
});