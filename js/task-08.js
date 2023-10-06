const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    
    const loginFormElements = event.currentTarget.elements;

    const mail = loginFormElements.email.value.trim();
    const password = loginFormElements.password.value.trim();

    if (!mail || !password) {
        alert('Please fill in all fields.');
    } else {
        const formData = {
            email: mail,
            password: password,
        };
        console.log(formData);
        loginForm.reset();
    }
}