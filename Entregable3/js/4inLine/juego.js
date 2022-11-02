"use strict";

class Juego {

    constructor(num) {
        this.player1 = new Jugador();
        this.player2 = new Jugador();
        this.num = num;
        this.turner = this.player1.setTurn(true);
        this.tableroView = [];
        this.matrix = [];
    }

    init(img1, img2, name1, name2) {
        this.player1.setInfo(name1, img1, this.num);
        this.player2.setInfo(name2, img2, this.num);
        this.generateBoard(this.num - 1, this.num);
        this.generateMatrix(this.num - 1, this.num);
        this.player1.init((this.num * (this.num - 1)) / 2, 12, 50);
        let columnasFichas = (((this.num * (this.num - 1)) / 2) / 11);
        let inicioFichas2 = board.width - (columnasFichas * 50) - (columnasFichas * 24);
        this.player2.init((this.num * (this.num - 1)) / 2, Math.floor(inicioFichas2), 50);
        this.initEvents();
    }


    clearCanvas() {
        ctx.clearRect(0, 0, 1150, 530);
    }

    generateBoard(row, col) {
        this.clearCanvas();
        //generateBoard
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = new Image();
                img.src = 'img/gameDetail/Fractal.png';
                this.tableroView.push(img);
            }
        }
    }

    generateMatrix(row, col) {
        for (let i = 0; i < row; i++) {
            let row = [];
            for (let j = 0; j < col; j++) {
                row[j] = null;
            }
            this.matrix.push(row);
        }
    }

    addToMatrix(ficha, col, player) {
        let fila = this.num - 2;
        let insertado = false;
        while (fila >= 0 && !insertado) {
            if (this.matrix[0][col] != null) {
                ficha.returnToPos();
            }
            if (this.matrix[fila][col] == null) {
                this.matrix[fila][col] = ficha;
                console.log("fila: " + fila + " y col: " + col);
                insertado = true;
                this.refreshBoard(ficha, fila, col, player);
                /**this.winner = this.checkWinner(ficha, i, col);
                if (winner)
                    endGame(player);
                else
                    this.turner = player.setTurn(true);
                **/
            } 
            fila--;
        }
    }

    refreshBoard(ficha, fila, col, player) {
        let mitadTablero = (this.num/2) * 50;
        let inicioTablero = (board.width/2) - mitadTablero;
        let pos = player.chips.indexOf(ficha);
        let posX = inicioTablero + (col * 50) + 2;
        let posY = 65 + (fila * 50);
        player.chips[pos].setPosX(posX);
        player.chips[pos].setPosY(posY);
    }

    checkWinner(ficha, i, col) { //falta poner limites por bordes
        let count = 0;
        for (let index = col - 3; index <= col + 3; index++) {
            if (this.matrix[index][col] == ficha) { //Aca hay q establecer la igualdad
                count++;
                if (count == 4) //Aca hay q traer el num segun el juego
                    return true;
            } else {
                return false;
            }
        }
        for (let index = i - 3; index <= i + 3; index++) {
            if (this.matrix[index][i] == ficha) { //Aca hay q establecer la igualdad
                count++;
                if (count == 4) //Aca hay q traer el num segun el juego
                    return true;
            } else {
                return false;
            }
        }
        for (let index = i - 3; index <= i + 3; index++) {
            for (let j = col - 3; j <= col + 3; j++) {
                if (this.matrix[index][j] == ficha) { //Aca hay q establecer la igualdad
                    count++;
                    if (count == 4) //Aca hay q traer el num segun el juego
                        return true;
                }
                else
                    return false;
            }
        }
        for (let index = i - 3; index <= i + 3; index++) {
            for (let j = col + 3; j >= col - 3; j--) {
                if (this.matrix[index][j] == ficha) { //Aca hay q establecer la igualdad
                    count++;
                    if (count == 4) //Aca hay q traer el num segun el juego
                        return true;
                }
                else
                    return false;
            }
        }

    }

    endGame(player) {
        this.clearCanvas();
    }

    draw() {
        this.clearCanvas();
        //drawNames
        ctx.font = "15px Arial";
        ctx.fillText("Player 1: " + this.player1.getName(), 110, 25);
        ctx.fillText("Player 2: " + this.player2.getName(), board.width - 240, 25);
        //drawBoard
        let mitadTablero = (this.num / 2) * 50;
        let posX = (board.width / 2) - mitadTablero - 12;
        let posY = 50;
        let row = this.num - 1;
        let col = this.num;
        let pos = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = this.tableroView[pos];
                ctx.drawImage(img, posX, posY, 78, 78);
                posX += 50;
                if (posX == (board.width / 2) - mitadTablero - 12 + 50 * col) {
                    posX = (board.width / 2) - mitadTablero - 12;
                    posY += 50;
                }
                pos++;
            }
        }
        //drawFichas
        this.player1.draw();
        this.player2.draw();
    }

    initEvents() {
        board.addEventListener("mouseup", (e) => {
            this.mouseUp(e)
        });
    }

    mouseUp(e) {
        //Fichas Matriz Player 1
        for (let index = 0; index < this.player1.chips.length; index++) {
            if (this.player1.chips[index].getCol() != -1 && this.player1.chips[index].enMatriz == false) {
                this.player1.chips[index].setEnMatriz();
                this.addToMatrix(this.player1.chips[index].getFicha(), this.player1.chips[index].getCol(), this.player1);
            } 
        }
        //Fichas Matriz Player 2
        for (let index = 0; index < this.player2.chips.length; index++) {
            if (this.player2.chips[index].getCol() != -1 && this.player2.chips[index].enMatriz == false) {
                this.player2.chips[index].setEnMatriz();
                this.addToMatrix(this.player2.chips[index].getFicha(), this.player2.chips[index].getCol(), this.player2);
            } 
        }
    }
}