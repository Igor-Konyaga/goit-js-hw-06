const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', handleSubmissionForm)

function handleSubmissionForm (e) {
	e.preventDefault();

const currentEmail = e.currentTarget.elements.email.value;
const currentPassword = e.currentTarget.elements.password.value;


if (currentEmail === '' || currentPassword === '' || currentPassword === ' ') {
	return alert('Усі поля повинні бути заповлені!!!');
};

const formData = {
	email: `${e.currentTarget.elements.email.value}`,
	password: `${e.currentTarget.elements.password.value}`,
}

console.log(formData)

e.currentTarget.reset();

formData.email = '';
formData.password = '';

console.log(formData)

};





