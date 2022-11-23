"use strict";

addEventListener('DOMContentLoaded', (event) => {
    let left = 1;
    let right = 5;
    let leftMin = 1;
    let rightMax = 7;

    let leftButton = document.getElementById("leftArrow");
    leftButton.addEventListener('click', moveLeft);

    let rightButton = document.getElementById("rightArrow");
    rightButton.addEventListener('click', moveRight);

    function show() {
        for (let index = left; index <= right; index++) {
            document.getElementById("screenshot"+index).style.display="inline-block";   
        }
        
    }

    function checkButtons () {
        if (left == leftMin) {
            leftButton.style.visibility="hidden";
        } else {
            leftButton.style.visibility="visible";
        }
        if (right == rightMax) {
            rightButton.style.visibility="hidden";
        } else {
            rightButton.style.visibility="visible";
        }
    }

    function moveLeft() {
        if (left > leftMin) {
            document.getElementById("screenshot"+right).style.display="none";
            left-=1;
            right-=1;
            for (let index = left; index <= right; index++) {
                document.getElementById("screenshot"+index).style.display="inline-block";   
            }
            checkButtons();
        } else {
            return;
        }
    }
    function moveRight() {
        if (right < rightMax) {
            document.getElementById("screenshot"+left).style.display="none";
            left+=1;
            right+=1;
            for (let index = left; index <= right; index++) {
                document.getElementById("screenshot"+index).style.display="inline-block";   
            }
            checkButtons();
        } else {
            return;
        }
    }

    show();
    checkButtons();
});



