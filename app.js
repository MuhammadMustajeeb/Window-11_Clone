let taskbar= document.querySelector(".taskbar");
let startmenu= document.querySelector(".start-menu");

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-410px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})