let pElem = document.querySelector("p");
let buttonElem = document.querySelector("button");
let inputElem = document.querySelector("input");

buttonElem.addEventListener("click", () => {
  try {
    if (inputElem.value.length < 8) {
      throw "too short";
    } else {
      throw "too long";
    }
  } catch (err) {
    pElem.innerHTML = err;
  }
});
