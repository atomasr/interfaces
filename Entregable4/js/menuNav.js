"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let btnMenu = document.querySelector(".hamburger");
    let btnHam = document.querySelector(".hamburguer-menu");    
    let btnUser = document.getElementById("btn-user");
    let navbar = document.getElementById("navbar");
    let logoNav = document.getElementById("logoNav");
    var scrollPos = window.pageYOffset;

    /*Adds animation to hamburguer menu while opening/closing*/
    btnMenu.addEventListener("click", function() {
        btnMenu.classList.toggle("active");
        document.querySelector(".menu-navegation").classList.remove("no-animation");
        document.querySelector(".menu-navegation").classList.toggle("show");
    });

    /*Adds animation to user menu while opening/closing*/
    btnUser.addEventListener("click", event => {
        btnUser.classList.toggle("active");
        document.querySelector(".menu-user").classList.remove("no-animation");
        document.querySelector(".menu-user").classList.toggle("show");
    });

    /** Changes header look and feel on scroll */
    window.onscroll = function () {
        var currentScroll = window.pageYOffset;
        if (scrollPos > currentScroll) {
            logoNav.style.width= '100%';
            logoNav.style.height='100%';
            logoNav.style.position = "relative";
            logoNav.style.right = "0";
            navbar.style.top = "0";
            btnHam.style.visibility = 'visible';
            btnUser.style.visibility = 'visible';
        } else {
            logoNav.style.width='40%';
            logoNav.style.height='40%';
            logoNav.style.position = "absolute";
            logoNav.style.bottom = "2px";
            logoNav.style.right = "30%";
            btnHam.style.visibility = 'hidden';
            btnUser.style.visibility = 'hidden';
            navbar.style.top = "-30px";
            btnMenu.classList.remove("active");
            document.querySelector(".menu-navegation").classList.remove("show");
            document.querySelector(".menu-user").classList.remove("show");
        }
        scrollPos = currentScroll;
    }

})
