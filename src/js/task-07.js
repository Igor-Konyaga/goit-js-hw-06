const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');



inputEl.addEventListener('input', handleСhangeSize);

function handleСhangeSize () {
	
textEl.style.fontSize =`${inputEl.value}px`;

};
handleСhangeSize();
