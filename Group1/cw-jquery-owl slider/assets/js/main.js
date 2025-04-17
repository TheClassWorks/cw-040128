$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    rtl: true, // هم کار نمی کنه loop اگه این را نگذاریم
    margin: 10,
    nav: false,
    dots:false,
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
