"use strict";

class Jugador {

    chips = [];

    contructor() {
        this.turn = false;
    }

    setInfo(name, img, num) {
        this.name = name;
        this.img = img;
        this.num = num;
    }

    getName() {
        return this.name;
    }

    setTurn(bool) {
        this.turn = bool;
    }

    initEvents() {
        board.addEventListener("mousedown", (e) => {
            this.mouseDown(e)
        });
        board.addEventListener("mousemove", (e) => {
            this.mouseMove(e)
        });
        board.addEventListener("mouseup", (e) => {
            this.mouseUp(e)
        });
    }

    mouseDown(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].checkSelected(x, y)) {
                this.chips[i].setSelected(true);
            } else {
                this.chips[i].setSelected(false);
            }
        }

    }

    mouseMove(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].isSelected(e) && !this.chips[i].isUsada()) {
                if (x > 0 && x < board.width && y > 0 && y < board.height) { //chequear esta condicion por las dudas
                    this.chips[i].move(x, y, e);
                    return;
                } else {
                    this.mouseUp(e);
                }
            }
        }
    }

    mouseUp(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let mitadTablero = (this.num/2) * 50;
        let inicioTablero = (board.width/2) - mitadTablero;
        let finalTablero = (board.width/2) + mitadTablero;
        this.chips.forEach(chip => {
            if (chip.isSelected(e)) {
                if (x > inicioTablero && x < finalTablero && y > 0 && y < 65) {
                    console.log("en zona");
                    let columna = false;
                    let posCol = inicioTablero;
                    let i = 0;
                    while (!columna) {
                        if (x > posCol && x < posCol + 50) {
                            console.log("ficha insertada en col " + i);
                            chip.setUso(true);
                            columna = true;
                        } else {
                            posCol += 50;
                            i++;
                        }
                    }
                } else {
                    chip.returnToPos();
                }
            }
            chip.setSelected(false);
        });
    }

    addChips(cant, x, y) {
        let rows = cant / 11;
        let max = cant / rows;

        for (let i = 0; i < rows; i++) {
            for (let index = 0; index < max; index++) {
                let chip = new Ficha(x, y, 24, this.img);
                y += 40;
                this.chips.push(chip);
            }
            y = 50;
            x += 60;
        }
    }

    draw() {
        for (let index = this.chips.length - 1; index >= 0; index--) {
            let chip = this.chips[index];
            chip.drawChip();
        }
    }

    init(amountChips, x, y) {
        this.addChips(amountChips, x, y);
        this.initEvents();
    }
}