var elForm = document.querySelector("[data-year-form]");
var elInputYear = document.querySelector("[data-year-input]");
var elText = document.querySelector("[data-text-year]");
var num = 4;
var number = 400;
var inputYear;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  year = +elInputYear.value;
  if (year > 0 && year < 2022) {
    isyearLeap(4, 400);
  }
});
function isyearLeap() {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    elText.textContent = `${year}-yil kabisa yili! `;
  } else {
    elText.textContent = `${year}-yil kabisa yili emas!`;
  }
  year.value = "";
  return year % 4 === 0 && year % 100 !== 0 && year % 400 === 0;
}
