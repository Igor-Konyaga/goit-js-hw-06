const inputEl = document.getElementById('validation-input');
const maxLengthEl = inputEl.dataset.length;

inputEl.addEventListener('blur', handleVerifyLength);

function handleVerifyLength (e) {
	const currentInputLength = e.currentTarget.value.length;

	if ( currentInputLength > maxLengthEl) {
		inputEl.classList.add('invalid')
	} else {
		inputEl.classList.add('valid')
	};

console.log(currentInputLength);
};