let signUpBtn = document.getElementById('signUpBtn')
let signInBtn = document.getElementById('signInBtn')
let nameField = document.getElementById('nameField')
let tittle = document.getElementById('tittle')
let emailField = document.getElementById('emailField')
let passwordField = document.getElementById('passwordField')


signInBtn.onclick = function()
{
  nameField.style.maxHeight = '0';
  tittle.innerHTML='Sign In';
  signUpBtn.classList.add('disaple');
  signInBtn.classList.remove('disaple');

}

signUpBtn.onclick = function()
{
  nameField.style.maxHeight = '60px';
  tittle.innerHTML='Sign up';
  signInBtn.classList.add('disaple');
  signUpBtn.classList.remove('disaple');

}


function isLoginEmpty() {

  if (emailField.value == "" || passwordField.value == "") {
      console.log('inputs is required');
  } else {
  
  }
}