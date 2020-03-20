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

$('.work_item .item_img').fancybox({
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

$('.text_block').slick({
  fade: false,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: false,
  arrows: false,
  dots: true,
  asNavFor: '.image_block'
});

$('.image_block').slick({
  fade: false,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: false,
  arrows: false,
  dots: false,
  rtl: true,
  asNavFor: '.text_block'
});

// company_slider---------------

$('.slider1').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  arrows: false,
  dots: false,
  slidesToShow: 5,
  speed: 1500
});

$('.slider2').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  arrows: false,
  dots: false,
  slidesToShow: 5,
  speed: 1500
});