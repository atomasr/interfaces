"use strict";

let modal = document.querySelector("#loading");
let bar = document.querySelector("#progressBar div");

function load() {
    modal.style.opacity = "0.95";
    bar.parentElement.style.opacity = "1";
    let width = 20;
    let progressBar = setInterval(progress, 10);
    function progress() {
        if (width >= 100) {
            clearInterval(progressBar);
            completeLoad();
        } else {
            width++;
            bar.style.width = width + '%';
            bar.innerHTML = width * 1 + '%';
        }
    }
}

function completeLoad() {
    modal.style.opacity = "0";
    modal.style.zIndex = "-50"
    bar.parentElement.style.opacity = "0";
    // bar.parentElement.style.zIndex="-50"
}

load();

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
