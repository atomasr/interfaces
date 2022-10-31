"use strict";

let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

class Juego {

    constructor(img1, img2, name1, name2, num) {
        this.player1 = new Jugador(img1, name1, num);
        this.player2 = new Jugador(img2, name2, num);
        this.num = num;
        this.turner = this.player1.setTurn(true);
        this.tableroView = [];
    }

    init() {
        this.draw(this.num - 1, this.num);
    }


    clearCanvas() {
        ctx.clearRect(0, 0, 1024, 530);
    }

    draw(row, col) {
        this.clearCanvas();

        //drawBoard
        let posX = 250;
        let posY = 50;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = new Image();
                img.src = 'img/gameDetail/Fractal.svg';
                img.onload = function () {
                    ctx.drawImage(img, posX, posY, 78, 78);
                    posX += 50;
                    if (posX == 250 + 50 * col) {
                        posX = 250;
                        posY += 50;
                    }
                }
            }
        }
    }
}