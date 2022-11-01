"use strict";

class Juego {

    constructor(num) {
        this.player1 = new Jugador();
        this.player2 = new Jugador();
        this.num = num;
        this.turner = this.player1.setTurn(true);
        this.tableroView = [];
    }

    init(img1, img2, name1, name2) {
        this.player1.setInfo(name1, img1);
        this.player2.setInfo(name2, img2);
        this.drawBoard(this.num - 1, this.num);
        this.player1.init((this.num * (this.num - 1)) / 2, 50, 50);
        this.player2.init((this.num * (this.num - 1)) / 2, 800, 50);
    }


    clearCanvas() {
        ctx.clearRect(0, 0, 1024, 530);
    }

    drawBoard(row, col) {
        this.clearCanvas();

        //drawBoard
        let posX = 250;
        let posY = 50;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = new Image();
                img.src = 'img/gameDetail/Fractal.svg';
                img.onload = function() {
                    ctx.drawImage(img, posX, posY, 78, 78);
                    posX += 50;
                    if (posX == 250 + 50 * col) {
                        posX = 250;
                        posY += 50;
                    }
                }
                this.tableroView.push(img);
            }
        }
    }

    draw() {
        this.clearCanvas();
        //drawBoard
        let posX = 250;
        let posY = 50;
        let row = this.num - 1;
        let col = this.num;
        let pos = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = this.tableroView[pos];
                ctx.drawImage(img, posX, posY, 78, 78);
                posX += 50;
                if (posX == 250 + 50 * col) {
                    posX = 250;
                    posY += 50;
                }
                pos++;
            }
        }
        //drawFichas
        this.player1.draw();
        this.player2.draw();
    }
}