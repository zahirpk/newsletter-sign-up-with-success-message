const emailValidate = document.querySelector(".emailInputField");
const myButton = document.getElementById('click_button');
let errorMessage = document.getElementById('emailError');
const MainContainer=document.querySelector(".container");
const thankYouSubscribing = document.querySelector('.card_container')
const homePage=document.querySelector("#Dimiss_Button")
myButton.addEventListener('click', function(event) {
  const checkEmail = emailValidate.value;
  const isValidEmail = validateEmail(checkEmail);
  if(!isValidEmail){
    errorMessage.innerHTML="Valid email required";
    errorMessage.style.color="#ff6666";
    emailValidate.style.backgroundColor="#facfcf"
    emailValidate.classList.toggle('placeholder-red');
  }else{
    MainContainer.style.display="none"
    thankYouSubscribing.style.display="flex"
    homePage.addEventListener('click',function(event){
      MainContainer.style.display="flex"
      thankYouSubscribing.style.display="none"
    })
  }
});

function validateEmail(email) {
  const re = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email.toLowerCase());
}
