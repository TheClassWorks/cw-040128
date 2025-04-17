//refrence error
//logical error
//syntax error

let pElem = document.querySelector("p");
let inputElem = document.querySelector("input");
let buttonElem = document.querySelector("button");

//error handling
try {
  //کدی که ممکنه خطا داشته باشه
  let number = 12;
  console.log(number);
} catch (error) {
  //مدیریت خطا
  console.log("خطا در مقادیر ورودی");
}

try {
  console.log(x);
} catch (err) {
  pElem.innerHTML = err.name;
}
buttonElem.addEventListener("click", () => {
  try {
    if (inputElem.value.length < 8) {
      throw "too short";
    } else {
      throw "too long";
    }
  } catch (error) {
    pElem.innerHTML = error;
  } finally {
    inputElem.value = "";
  }
});
