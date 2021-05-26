//Slideshow Buttons
line1.onclick = function(){
  slider.style.transform = 'translateX(0)';
  active.style.top = '0px';
}

line2.onclick = function(){
  slider.style.transform = 'translateX(-33.3333%)';
  active.style.top = '80px';
}

line3.onclick = function(){
  slider.style.transform = 'translateX(-66.6666%)';
  active.style.top = '160px';
}





//BUTTON ON LANDINGPAGE
const button1 = document.querySelector("#button1");
const buttonTarget = document.querySelector("#sec-2");

//Scroll targets
button1.addEventListener("click", function () {
  buttonTarget.scrollIntoView({
    behavior: "smooth",
    });
})




//Buttons for the guideline
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel ");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="white";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#525270');



/*tilmeldingsformularen*/
// input object
var fullname = document.forms["vform"]["fullname"];
var email = document.forms["vform"]["email"];
var phone = document.forms["vform"]["phone"];

//getting error display
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var phone_error = document.getElementById("phone_error");

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

  if (phone.value == ""){
    phone.style.border = "1px solid red";
    phone_error.textContent = "This is a required field";
    phone.focus();
    return false;
  } else {
    phone.style.border = "1px solid white";
    phone_error.textContent = ""
  }
}
