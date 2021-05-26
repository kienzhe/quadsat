//PIL ON LANDINGPAGE
const pil= document.querySelector("#pil");
const pilTarget = document.querySelector("#header");

//Scroll targets
pil.addEventListener("click", function () {
  pilTarget.scrollIntoView({
    behavior: "smooth",
  });
})





//BUTTON ON LANDINGPAGE
const button1 = document.querySelector("#button1");
const buttonTarget = document.querySelector("#sec-2");

//Scroll targets
button1.addEventListener("click", function () {
  buttonTarget.scrollIntoView({
    behavior: "smooth",
    });
})






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
