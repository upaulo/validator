import validator from 'validator';
import './style.css';

const fieldText = document.getElementById('value');
const option = document.getElementById('select-options');
const submitBtn = document.getElementById('submit-btn');
const answer = document.getElementById('answer');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const validation = {
		email: validator.isEmail(fieldText.value),
		cpf: validator.isTaxID(fieldText.value, 'pt-BR'),
		password: validator.isStrongPassword(fieldText.value),
		hex: validator.isHexColor(fieldText.value),
		url: validator.isURL(fieldText.value),
	};

	const validationText = `${validation[option.value]}`;
	answer.innerHTML = validationText;

	answer.classList.remove('success', 'error');

	if (validation[option.value]) {
		answer.classList.add('success');
	} else {
		answer.classList.add('error');
	}

	answer.style.display = 'block';

	setTimeout(() => {
		answer.style.display = 'none';
	}, 3000);
});
