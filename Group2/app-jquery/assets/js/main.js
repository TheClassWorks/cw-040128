// let pElem = document.querySelector("p");
// pElem.addEventListener("click", () => {});

$(".btn1").click(() => {
  //   $("p").toggle(1000);
  //   $("p").fadeTo(1000, 1);
  //   $(".box").slideToggle();
});
$(".btn2").click(() => {
  //   $("p").fadeToggle(1000);
  //   $("p").fadeTo(1000, 0.2);
  //   $(".box").slideUp();
});

$(".btn2").click(() => {
  $(".box").animate({
    // width: "50px",
    // height: "300px",
    right: "100px",
    top: "450px",
  },3000);
});
