$(document).ready(function () {
  $(".header-slider").slick({
    // normal options...
    infinite: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,

    // درست کار نکرد fade هر چه تغییر دادم
    //     speed: 500,
    //   fade: true,
    //   cssEase: 'linear',

    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
