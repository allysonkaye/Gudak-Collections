function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


const colorSwitch = document.getElementById("color-switch");

colorSwitch.addEventListener('click',checkMode);
function checkMode(){
    if(colorSwitch.checked) {
        console.log ("darkmode");
        darkMode();
    }
    else {
        console.log ("lightmode");
        lightMode();


    }
}
  function darkMode(){
    document.body.classList.add("dark-mode");
  }
  function lightMode(){
    document.body.classList.remove("dark-mode");
    
  }