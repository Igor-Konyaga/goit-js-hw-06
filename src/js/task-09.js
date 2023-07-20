function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');

btnEl.addEventListener('click', handalClickBtn);

function handalClickBtn (e) {
	document.body.style.backgroundColor = getRandomHexColor();
	valueColorEl.textContent = getRandomHexColor();
} ;