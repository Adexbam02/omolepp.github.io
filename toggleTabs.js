const whiteLogo = document.getElementById("white-logo")
const darkLogo = document.getElementById("dark-logo")



const sun =document.getElementById("Sun")
const moon =document.getElementById("Moon")
const main =document.getElementById("main")

sun.addEventListener("click", ()=>{
  sun.style.display = "none"
  moon.style.display = "block"
  
  main.classList.add("light")
  // whiteLogo.style.display = "none"
  // darkLogo.style.display = "block"

})

moon.addEventListener("click", ()=>{
  moon.style.display = "none"
  sun.style.display = "block"

  main.classList.remove("light")
  // whiteLogo.style.display = "block"
  // darkLogo.style.display = "none"

})

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpn").click();

function openCity(evt, cityName) {

  // Remove 'selected' class from all buttons
  const buttons = document.getElementsByClassName("tablinks");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }

  // Add 'selected' class to the clicked button
  evt.currentTarget.classList.add("selected");


  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}