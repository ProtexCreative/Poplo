var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100vh ) {
        myNav.classList.add("navbar-colored");
        myNav.classList.remove("navbar-home");
    } 
    else {
        myNav.classList.add("navbar-home");
        myNav.classList.remove("navbar-colored");
    }
}