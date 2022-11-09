"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let btnMenu = document.querySelector("#btn-menu");
    let btnUser = document.querySelector('#btn-user');

    btnMenu.addEventListener("click", event => {
        document.querySelector(".menu-navegation").classList.toggle("show");
    });

    btnUser.addEventListener("click", event => {
        document.querySelector(".menu-user").classList.toggle("show");
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-65px";
        }
        prevScrollpos = currentScrollPos;
    }

})
