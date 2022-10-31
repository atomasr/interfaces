"use strict";

let board = document.getElementById('canvas');
let ctx = board.getContext('2d');
let tableroView = [];

class Juego {
    player1;
    player2;
    num;

    constructor(img1, img2, name1, name2, num) {
        this.player1 = new Jugador(img1, name1, num);
        this.player2 = new Jugador(img2, name2, num);
        this.num = num;
        this.turner = this.player1.setTurn(true);
    }

    init() {
        this.addBoard(this.num - 1, this.num);
        this.draw();
    }

    addBoard(row, col) {
        for (let index = 0; index < row; index++) {
            let f = [];
            for (let index = 0; index < col; index++) {
                let img = new Image();
                img.src = 'img/gameDetail/Fractal.svg';
                f.push(img);
            }
            tableroView.push(f);
        }
    }

    clearCanvas() {
        ctx.clearRect(0, 0, 1024, 530);
    }

    draw() {
        this.clearCanvas();

        //drawBoard
        let posX = 250;
        let posY = 50;
        for (let i = 0; i < this.num - 1; i++) {
            for (let j = 0; j < this.num; j++) {
                let img = tableroView[i][j];
                img.onload = function() {
                    ctx.drawImage(img, posX, posY, 78, 78);
                };
                posX += 50;
            }
            posX = 250;
            posY += 50;
        }
    }
}