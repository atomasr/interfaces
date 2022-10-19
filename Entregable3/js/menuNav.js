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
})
