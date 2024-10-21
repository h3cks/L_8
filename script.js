const showLoginFormButton = document.getElementById('showLoginForm');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');
const closeLoginFormButton = document.getElementById("closeLoginForm");

const showRegistrationFormButton = document.getElementById('showRegistrationForm');
const registrationModal = document.getElementById('registrationModal');
const registrationForm = document.getElementById('registrationForm');
const toggleRegPasswordButton = document.getElementById('toggleRegPassword');
const regPasswordInput = document.getElementById('regPassword');
const regEyeIcon = document.getElementById('regEyeIcon');
const closeRegistrationFormButton = document.getElementById("closeRegistrationForm");

showLoginFormButton.addEventListener('click', () => {
    loginModal.style.display = 'block'; // Показуємо форму входу
});

togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'far fa-eye-slash';
        togglePasswordButton.title = 'Сховати пароль';
    } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'far fa-eye';
        togglePasswordButton.title = 'Показати пароль';
    }
});

closeLoginFormButton.addEventListener("click", function() {
    loginModal.style.display = "none"; // Закриваємо форму входу
});

window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none"; // Закриваємо форму входу при кліку поза нею
    }
});

showRegistrationFormButton.addEventListener('click', () => {
    registrationModal.style.display = 'block'; // Показуємо форму реєстрації
});

toggleRegPasswordButton.addEventListener('click', () => {
    if (regPasswordInput.type === 'password') {
        regPasswordInput.type = 'text';
        regEyeIcon.className = 'far fa-eye-slash';
        toggleRegPasswordButton.title = 'Сховати пароль';
    } else {
        regPasswordInput.type = 'password';
        regEyeIcon.className = 'far fa-eye';
        toggleRegPasswordButton.title = 'Показати пароль';
    }
});

closeRegistrationFormButton.addEventListener("click", function() {
    registrationModal.style.display = "none"; // Закриваємо форму реєстрації
});

window.addEventListener("click", function(event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = "none"; // Закриваємо форму реєстрації при кліку поза нею
    }
});
