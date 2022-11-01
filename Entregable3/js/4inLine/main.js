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


console.log(char1);

let juego = new Juego(7);

juego.init(char1, char2, 'Sofía', 'Tomás');

});