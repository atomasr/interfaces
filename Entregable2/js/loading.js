"use strict";

let modal = document.querySelector("#loading");
let bar = document.querySelector("#progressBar div");
let loading = setTimeout(completeLoad, 5000);

function completeLoad() {
    modal.style.opacity = "0";
    modal.style.zIndex = "-50"
    bar.parentElement.style.opacity = "0";
}

/*
Progress bar con js
function load() {
    modal.style.opacity = "0.95";
    bar.parentElement.style.opacity = "1";
    //let width = 20;

    /*
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
    }*/