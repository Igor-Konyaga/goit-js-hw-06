const inputEl = document.getElementById('validation-input');
const LengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', handleVerifyLength);

function handleVerifyLength (e) {
	const currentInputLength = e.currentTarget.value.length;

	if ( currentInputLength === LengthEl) {
		inputEl.classList.remove('invalid')
		inputEl.classList.add('valid')
	} else {
		inputEl.classList.remove('valid')
		inputEl.classList.add('invalid')
	};

};