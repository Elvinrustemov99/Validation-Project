const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const password2Input = document.getElementById("password2");

form.addEventListener('submit', e => {
	e.preventDefault();
	inputValidation();
});

inputValidation = () => {
	const usernameValidation = usernameInput.value.trim();
	const emailValidation = emailInput.value.trim();
	const passwordValidation = passwordInput.value.trim();
	const password2Validation = password2Input.value.trim();

	if (usernameValidation === ""){
		setError(usernameInput, "İstifadəçi adını daxil edin!");
	} else {
		setSuccess(usernameInput);
	}

	if (emailValidation === ""){
		setError(emailInput, "Email daxil edin!");
	} else if (!isEmail(emailValidation)){
		setError(emailInput, "Düzgün email formatı daxil edin!");
	} else {
		setSuccess(emailInput);
	}

	if (passwordValidation === ""){
		setError(passwordInput, "Şifrəni daxil edin!");
	} else {
		setSuccess(passwordInput);
	}

	if (password2Validation === ""){
		setError(password2Input, "Şifrə təkrarını daxil edin!");
	} else if (password2Validation !== passwordValidation){
		setError(password2Input, "Şifrənin təkrarı düzgün deyil!")
	} else {
		setSuccess(password2Input);
	}
}

setError = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

setSuccess = (item) => {
	const formControl = item.parentElement;
	formControl.className = "form-control success";
}





















function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





