const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', handleSubmissionForm)

function handleSubmissionForm (e) {
	e.preventDefault();

const currentEmailLength = e.currentTarget.elements.email.value.length;
const currentPasswordLength = e.currentTarget.elements.password.value.length;


if (currentEmailLength < 1 || currentPasswordLength < 1) {
	alert('Усі поля повинні бути заповлені!!!')
};

const formData = {
	email: `${e.currentTarget.elements.email.value}`,
	password: `${e.currentTarget.elements.password.value}`,
}

console.log(formData);

e.currentTarget.reset();
};





