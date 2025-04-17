$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: false,
    rtl: true, // هم کار نمی کنه loop اگه این را نگذاریم
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
