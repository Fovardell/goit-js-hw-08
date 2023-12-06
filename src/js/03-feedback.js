import _ from 'lodash';
const elements = {
	form: document.querySelector(".feedback-form"),
	email: document.querySelector('input[name="email"]'),
	message: document.querySelector('textarea[name="message"]'),
	submit: document.querySelector('button[type="submit"]'),
};
const { form, email, message, submit } = elements;


const saveFormState = _.throttle(() => {
	const data = {
		email: email.value,
		message: message.value
	};

	localStorage.setItem("feedback-form-state", JSON.stringify(data));
}, 500);

form.addEventListener("input", saveFormState);

const storedFormData = JSON.parse(localStorage.getItem("feedback-form-state")) || { email: "", message: "" };
email.value = storedFormData.email;
message.value = storedFormData.message;

submit.addEventListener('click', (e) => {
	e.preventDefault();

	if (!email.value || !message.value) {
		return;
	}
	console.log(`Your email: ${email.value}\nYour message: ${message.value}`);

	form.reset();
	localStorage.removeItem("feedback-form-state");
});
