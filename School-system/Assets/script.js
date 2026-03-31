let icon = document.getElementById('eye-icon');
let psw = document.getElementById('password');

icon.addEventListener('click', () => {
  if (psw.type === 'password' && icon.classList === 'visibiloty') {
    psw.type = 'text';
    icon.classList = 'visibiloty-off';
  } else {
    psw.type = 'text';
    icon.classList = 'visibility';
  }
  console.log('hello')
})