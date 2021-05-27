/*tilmeldingsformularen*/
// input object
var fullname = document.forms["vform"]["fullname"];
var email = document.forms["vform"]["email"];
var phone = document.forms["vform"]["phone"];
var message = document.forms["vform"]["message"];

//getting error display
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var phone_error = document.getElementById("phone_error");
var message_error = document.getElementById("message_error");

//function
function validate(){
  if (fullname.value == ""){
    fullname.style.border = "1px solid red";
    name_error.textContent = "This is a required field";
    fullname.focus();
    return false;
  } else {
    fullname.style.border = "1px solid white";
    name_error.textContent = ""
  }

  if (email.value == ""){
    email.style.border = "1px solid red";
    email_error.textContent = "This is a required field";
    email.focus();
    return false;
  } else {
    email.style.border = "1px solid white";
    email_error.textContent = ""
  }

  if (phone.value.length < 8){
    phone.style.border = "1px solid red";
    phone_error.textContent = "This is a required field";
    phone.focus();
    return false;
  } else {
    phone.style.border = "1px solid white";
    phone_error.textContent = ""
  }
  
  if (message.value.length <= 100){
    message.style.border = "1px solid red";
    message_error.textContent = "This is a required field";
    message.focus();
    return false;
  } else {
    message.style.border = "1px solid white";
    message_error.textContent = ""
  }
  alert("Your question has been submitted")
  return true;
}
