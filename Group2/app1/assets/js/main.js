//error handling
let pElem = document.querySelector("p");
let buttonElem = document.querySelector("button");
let inputElem = document.querySelector("input");

//error name:error message
// buttonElem.addEventListener("click", () => {
//   try {
//     let num = 18;
//     console.log(x);
//   } catch (err) {
//     //   console.log("قسمت catch اجرا شد");
//     pElem.innerHTML = err.name;
//   }
// });

buttonElem.addEventListener("click", () => {
  try {
    if (inputElem.value.length != 8) {
      throw "خطا";
    }
  } catch (err) {
    pElem.innerHTML = err;
  } finally {
    inputElem.value = "";
    // pElem.innerHTML = "";
  }
});
