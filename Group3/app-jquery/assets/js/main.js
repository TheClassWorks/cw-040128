$(document).ready(function () {
  $(".btn1").click(() => {
    $("p").toggle(2000);
  });
  $(".btn2").click(() => {
    $("p").show();
  });
});
