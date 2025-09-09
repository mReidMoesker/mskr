'use strict';

const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', Login);

function Login() {
  window.location.href = 'index.html';
}