"use strict";


const heart = document.getElementById('vectorHeart');
let toggle = true;

heart.addEventListener('click', function() {
    toggle = !toggle;
    if (toggle) {
        heart.src = 'img/icons/heart-regular.svg';
    } else {
        heart.src = 'img/icons/heart-solid.svg';
    }
})