let closeMenu, showMenu, home, about, projects, contact, width, widthMin;

closeMenu = document.getElementById("close");
showMenu = document.getElementById("show");
home = document.getElementById("a_home");
about = document.getElementById("a_about");
projects = document.getElementById("a_projects");
contact = document.getElementById("a_contact");

width = screen.width;
widthMin = 730;    

if(width < widthMin){
    showMenu.addEventListener("click", ShowMenu);
    closeMenu.addEventListener("click", CloseMenu);
    home.addEventListener("click", CloseMenu);
    about.addEventListener("click", CloseMenu);
    projects.addEventListener("click", CloseMenu);
    contact.addEventListener("click", CloseMenu);
}


function ShowMenu(){
    document.getElementById("show").style.display="none";;
    document.getElementById("close").style.display="block";
    document.getElementById("cont-list").style.display="block";
}

function CloseMenu(){
    document.getElementById("show").style.display="block";;
    document.getElementById("close").style.display="none";
    document.getElementById("cont-list").style.display="none";
}