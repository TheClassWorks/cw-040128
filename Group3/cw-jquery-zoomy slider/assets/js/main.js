var urls = ["assets/img/1.jpg", "assets/img/2.jpg", "assets/img/3.jpg", "assets/img/4.jpg"];
$(document).ready(function () {
  $("#gallery").zoomy(urls, {
    width: 600,
    height: 450,
    thumbHide: true, // های پایین عکس thumbnail برای پنهان کردن
    // thumbLeft: true,
    // thumbRight: true,
  });
});
