
const passwordInput = document.querySelector('#input-password');

const showPassword = document.querySelector('#show-password');
const hidePassword = document.querySelector('#hide-password');


const btnStatePassword = document.querySelector('.btn-hide-show');

btnStatePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        showPassword.style.display = 'block';
        hidePassword.style.display = 'none';
    }
});
btnStatePassword.addEventListener('click', (event) => {
    event.preventDefault(); 
});


