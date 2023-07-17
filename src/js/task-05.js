
const inputEl = document.getElementById('name-input');
const nameEl = document.getElementById('name-output');

inputEl.addEventListener('input', handleInputText);


function handleInputText (e) {
	nameEl.textContent =	e.currentTarget.value;
};

