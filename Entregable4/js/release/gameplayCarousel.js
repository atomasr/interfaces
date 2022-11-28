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

    /** Mostrar/ocultar botones izquierdo/derecho de carrusel de GamePlay */
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

    /*Agrega animación al mover las cartas visibles hacia atrás en el carrusel de GamePlay*/
    function moveLeft() {
        if (left > leftMin) {
            document.getElementById("screenshot"+right).style.display="none";
            document.getElementById("screenshot"+right).classList.remove("animation-carousel-left");
            left-=1;
            right-=1;
            for (let index = left; index <= right; index++) {
                document.getElementById("screenshot"+index).style.display="inline-block"; 
                document.getElementById("screenshot"+index).classList.add("animation-carousel-left");  
            }
            checkButtons();
            setTimeout(function() {
                for (let index = left; index <= right; index++) {
                    document.getElementById("screenshot"+index).classList.remove("animation-carousel-left");  
                }
            }, 500);
        } else {
            return;
        }
    }
    /*Agrega animación al mover las cartas visibles hacia adelante en el carrusel de GamePlay*/
    function moveRight() {
        if (right < rightMax) {
            document.getElementById("screenshot"+left).style.display="none";
            document.getElementById("screenshot"+left).classList.remove("animation-carousel-right");
            left+=1;
            right+=1;
            for (let index = left; index <= right; index++) {
                document.getElementById("screenshot"+index).style.display="inline-block";  
                document.getElementById("screenshot"+index).classList.add("animation-carousel-right");  
            }
            checkButtons();
            setTimeout(function() {
                for (let index = left; index <= right; index++) {
                    document.getElementById("screenshot"+index).classList.remove("animation-carousel-right");  
                }
            }, 500);
        } else {
            return;
        }
    }

    show();
    checkButtons();
});



