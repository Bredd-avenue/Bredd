let icon = document.getElementById('eye-icon');
let psw = document.getElementById('password');

icon.addEventListener('click', () => {
  if (psw.type === 'password' && icon.textContent === 'visibility') {
    psw.type = 'text';
    icon.textContent = 'visibility_off';
  } else {
    psw.type = 'password';
    icon.textContent = 'visibility';
  }
})


/*const eyeIcon = document.getElementById('eye-icon');
const passwordInput = document.getElementById('password');

eyeIcon.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
});*/