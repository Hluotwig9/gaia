document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    if (loginBtn && registerBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });

        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }
});
