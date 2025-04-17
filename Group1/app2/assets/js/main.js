$(document).ready(function () {
  //   $(".btn1").click(function () {
  //     $("p").toggle('slow');
  //     // $("p").css("color", "red");
  //   });
  //   $(".btn2").click(function () {
  //     $("p").show('fast');
  //     // $("p").css("color", "red");
  //   });
  $(".btn1").click(function () {
    $(".box").animate({
      width: "260px",
      height: "300px",
    });
    $("p").text("آموزش جاوا اسکریپت");
  });
});

