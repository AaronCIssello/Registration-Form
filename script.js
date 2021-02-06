const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordRepeat = document.getElementById('passwordRepeat')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')



form.addEventListener('submit', (e) => {
  let messages = [];

  if (password.value !== passwordRepeat.value){
    messages.push('The passwords are not equal')
  }

  if(password.value.length <= 5){
    messages.push('The password must be at least 6 characters long')
  }
  if(password.value.length >= 20){
    messages.push('The password must maximum 20 characters long')
  }



  if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
