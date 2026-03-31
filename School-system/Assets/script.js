//Toggling visibility icon for password
const icon = document.getElementById('eye-icon');
const psw = document.getElementById('password');

icon.addEventListener('click', () => {
  const isPassword = psw.type === 'password';
  psw.type = isPassword ? 'text' : 'password';
  icon.textContent = isPassword ? 'visibility' : 'visibility_off';
});

