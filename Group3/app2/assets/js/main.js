let pElem = document.querySelector("p");
let buttonElem = document.querySelector("button");
let inputElem = document.querySelector("input");

function validateAge(age) {
  if (age < 0 || isNaN(age)) {
    throw "خطا";
    // console.log("خطا");
  }
  return age;
}

function submitFrom(age) {
  pElem.innerHTML = "سن شما ده سال آینده " + (age + 10) + "است";
}

buttonElem.addEventListener("click", () => {
  try {
    let sen = validateAge(Number(inputElem.value));
    submitFrom(sen);
  } catch (err) {
    console.log(err);
  } finally {
    inputElem.value = "";
  }
});



// console.log(15==='15');
