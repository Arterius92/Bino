$(function() {
  $('.home_slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    arrows: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    speed: 900,
    responsive: [
      {
        breakpoint: 719,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.service_slider').slick({
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          dots: false
        }
      }
    ]
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
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true,
    asNavFor: '.image_block'
  });

  $('.image_block').slick({
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: false,
    rtl: true,
    asNavFor: '.text_block'
  });

  // company_slider-------------------------------------------------

  $('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider2').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // button up-------------------------------------------------

  let btn = $('.btn_up');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(btn).addClass('show');
    } else {
      $(btn).removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Show modal block----------------------------------------------------

  $('.home .btn1, .footer_btn').click(function(){
    $('.modal_mask, .modal').fadeIn();
  });
  
  $('.modal_mask, .close').click(function(){
    $('.modal_mask, .modal').fadeOut();
  });

  // Show filter gallery----------------------------------------------

  $('.portfolio_nav a').click(function() {
    $('.portfolio_nav li').removeClass('active');
    $(this).parent('li').addClass('active');

    let category = $(this).attr('data-filter');

    if(category == 'all') {
      $('.work_gallery .work_item').show();
    } else {
      $('.work_gallery .work_item').hide();
      $('.work_gallery .work_item[data-filter="' + category + '"]').show();
    }
  });

  $('.read_more_btn').click(function() {
    $(this).toggleClass('open_btn');
    $(this).text($(this).text() == 'Read More ' ? 'Close ' : 'Read More ');
    $(this).parent('.card_text').toggleClass('opened');
    $(this).parent('.card_text').siblings('.card_image').toggleClass('closed');
  });

  new WOW().init();
});
