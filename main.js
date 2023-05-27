// Get all the li elements
const lis = document.querySelectorAll('.navContainer ul li');

// Add event listeners to each li element
lis.forEach(li => {
  li.addEventListener('mouseenter', function() {
    this.classList.add('hover'); // Add the 'hover' class on mouseenter
  });

  li.addEventListener('mouseleave', function() {
    this.classList.remove('hover'); // Remove the 'hover' class on mouseleave
  });
});


// NAVMENU OPEN & CLOSE
const openMenu = document.getElementById("open-menu-button")
const closeMenu = document.getElementById("close-menu-button")
const menu = document.getElementById("navMenu")
const lii = document.querySelectorAll("li")

openMenu.addEventListener("click", ()=>{
    menu.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
    // menu.style.width = "100%"
})

closeMenu.addEventListener("click", ()=>{
    menu.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})

// ADD BACKGROUND AFTER SCROLL
const nav = document.getElementById("nav")

window.onscroll =  () =>{
    const background = () =>{
        if(window.pageYOffset > 30){
            nav.classList.add("navBg")
        }else{
            nav.classList.remove("navBg")
        }
    }
    return background()
}


// Shake Animation
const button = document.getElementById('portBtn');

button.addEventListener('mouseover', function() {
  button.classList.add('shake-animation');
});

button.addEventListener('mouseout', function() {
  button.classList.remove('shake-animation');
});
