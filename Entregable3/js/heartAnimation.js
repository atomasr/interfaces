"use strict";

document.querySelectorAll('.vectorHeart').forEach(item => {
    item.addEventListener('click', event => {
        if (item.getAttribute("src") == 'img/icons/heart-regular.svg') {
            item.src = 'img/icons/heart-solid.svg';
        } else {
            item.src = 'img/icons/heart-regular.svg';
        }
    })
})