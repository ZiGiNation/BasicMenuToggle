let toggleNavStatus = false;

let toggleNav = function (){
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus === false){
        getSideBarUl.style.visibility = "visible"; 
        getSideBar.style.width = "295px";    
        getSideBarTitle.style.opacity = "0.5";

        let arrayLenght = getSideBarLinks.length;
        for(let i = 0; i < arrayLenght; i++){
            getSideBarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
  } else if(toggleNavStatus === true){
    getSideBarUl.style.visibility = "hidden"; 
    getSideBar.style.width = "50px";    
    getSideBarTitle.style.opacity = "0";

    let arrayLenght = getSideBarLinks.length;
    for(let i = 0; i < arrayLenght; i++){
        getSideBarLinks[i].style.opacity = "0";
    }
    toggleNavStatus = false;
    }
}