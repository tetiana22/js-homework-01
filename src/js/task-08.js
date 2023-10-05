const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    
    const loginFormElements = event.currentTarget.elements;

    const mail = loginFormElements.email.value;
    const password = loginFormElements.password.value;

    if (!mail || !password) {
        alert('Please fill in all fields.');
    } else {
        

        const submit = loginFormElements.submit;
        const formData = {
            mail,
            password,
            submit,
        }
        loginForm.reset();
    }
}