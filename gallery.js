function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


const colorSwitch = document.getElementById("color-switch");
const off = document.getElementById("off");


colorSwitch.addEventListener('click',checkMode);
function checkMode(){
    if(colorSwitch.checked) {
        console.log ("darkmode");
        darkMode();
        off.innerHTML = "On";
    }
    else {
        console.log ("lightmode");
        lightMode();
        off.innerHTML = "Off";

    }
}
  function darkMode(){
    document.body.classList.add("dark-mode");
  }
  function lightMode(){
    document.body.classList.remove("dark-mode");
    
  }