let counterValue = 0;
const counterEl = document.getElementById("counter");
const btnDecrement = counterEl.firstElementChild;
const btnIncrement = counterEl.lastElementChild;
const value = document.getElementById("value");

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
