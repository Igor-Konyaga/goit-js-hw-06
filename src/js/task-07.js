const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');



inputEl.addEventListener('input', handleСhangeSize);

function handleСhangeSize (e) {
const currentValue = e.currentTarget.value;
	
textEl.style.fontSize =`${currentValue}px`;

};