"use strict";

class Jugador {

    img;
    name;
    chips = [];

    contructor(img, name, amountChips) {
        this.img = img;
        this.turn = false;
        this.name = name;
        this.chips = loadChips(amountChips, img);
    }

    setTurn(bool) {
        this.turn = bool;
    }

    loadChips(amountChips, img) {
        for (let index = 0; index < amountChips; index++) {
            chip = new Ficha();
            this.chips.push(chip);
            chip.draw(img);
        }
    }

    initEvents() {
        let board = document.getElementById('canvas');
        board.onmousedown = this.mouseDown;
        board.onmousemove = this.mouseMove;
        board.onmouseup = this.mouseUp;
    }

    mouseDown(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < chips.length; i++) {
            if (chips[i].checkSelected(x, y)) {
                console.log('me clickearon');
                console.log(chips[i]);
                chips[i].setSelected(true);
            } else {
                console.log('no me clickearon');
                chips[i].setSelected(false);
            }
        }

    }

    mouseMove(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].isSelected(e)) {
                console.log(e);
                if (x > 0 && x < board.width && y > 0 && y < board.height) { //chequear esta condicion por las dudas
                    this.chips[i].move(x, y, e);
                    return;
                } else {
                    this.mouseUp();
                }
            }
        }
    }

    mouseUp() {
        chips.forEach(chip => {
            chip.setSelected(false);
        });
    }

    addChip(cant, x, y) {
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
        for (let index = this.cant - 1; index >= 0; index--) {
            this.chips[index].draw();
        }
    }

    init(x, y) {
        this.addChip(this.chips.length, x, y);
        this.draw();
        setInterval(this.draw, 200);
    }
}