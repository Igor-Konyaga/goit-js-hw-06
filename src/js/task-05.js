
const inputEl = document.getElementById('name-input');
const nameEl = document.getElementById('name-output');

inputEl.addEventListener('input', handleInputText);


function handleInputText (e) {

	if (e.currentTarget.value === ''){
	nameEl.textContent = 'Anonymous';
	} else {
		nameEl.textContent =	e.currentTarget.value;
	}
};

