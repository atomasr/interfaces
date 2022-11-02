"use strict";
addEventListener('DOMContentLoaded', (event) => {

    let char1 = document.getElementById('char1');
    let char2 = document.getElementById('char2');
    let char3 = document.getElementById('char3');
    let char4 = document.getElementById('char4');
    let char5 = document.getElementById('char5');
    let char6 = document.getElementById('char6');
    let char7 = document.getElementById('char7');
    let char8 = document.getElementById('char8');
    let char9 = document.getElementById('char9');
    let char10 = document.getElementById('char10');

    let play = document.getElementById('btnGame');
    play.addEventListener('click', () => {
        let form = document.getElementById('gameForm');
        let data = new FormData(form);

        let num = data.get('gameType');

        let name1 = data.get('name1');

        let name2 = data.get('name2');
   

        let charPlayer1 = data.get('char1');
        let img1 = new Image();

        if (charPlayer1 != null) {
            img1.src = charPlayer1;
        } else {
            img1.src = "img/gameDetail/characters/Chip.png";
        };

        let charPlayer2 = data.get('char2');
        let img2 = new Image();


        if (charPlayer2 != null) {
            img2.src = charPlayer2;
        } else {
            img2.src = "img/gameDetail/characters/Chip (2).png";
        }

        let juego = new Juego(num);

        juego.init(img1, img2, name1, name2);

        setInterval(function () {
            juego.draw();
        }, 200);

    })


});