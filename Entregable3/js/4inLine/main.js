"use strict";

let juego = new Juego(7);

juego.init('img/gameDetail/characters/Chip (3).svg', 'img/gameDetail/characters/Chip (2).svg', 'Sofía', 'Tomás');

setInterval(function() {
    juego.draw();
}, 200);