"use strict";

let timer = document.getElementById("timer");
let numbers = ['04', '03', '02', '01', '00'];

function countdown() {
    let index = 0;
    while (index < 5) {
        timer.innerText = numbers[index];
        setTimeout(index++, 1000);
    }
};

countdown();