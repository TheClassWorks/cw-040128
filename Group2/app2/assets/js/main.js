let inputElem = document.querySelector("input");
let pElem = document.querySelector("p");
let buttonElem = document.querySelector("button");

function validateAge(age) {
  if (age < 0) {
    throw "khata";
  }
  return age;
}

function submitForm(age) {
  pElem.innerHTML = "ده سال دیگه شما " + (age + 10) + "سال دارید";
}

buttonElem.addEventListener("click", () => {
  try {
    let age = validateAge(Number(inputElem.value));
    submitForm(age);
  } catch (error) {
    console.log(error);
  }
});

// function zarb(a, b, c) {
//   let result = a * b + c - a;
//   return result;
// }

// console.log(zarb(3, 6, 12));
// console.log(zarb(3, 65, 121));
// console.log(zarb(3, 6, 12));
