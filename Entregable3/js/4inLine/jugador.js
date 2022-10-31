"use strict";

class Jugador {

    chips = [];

    contructor() {
        this.turn = false;
    }

    setInfo(name, img) {
        this.name = name;
        this.img = img;
    }

    setTurn(bool) {
        this.turn = bool;
    }

    initEvents() {
        board.onmousedown = this.mouseDown(Event);
        board.onmousemove = this.mouseMove(Event);
        board.onmouseup = this.mouseUp();
    }

    mouseDown(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].checkSelected(x, y)) {
                console.log(chips[i]);
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
        this.chips.forEach(chip => {
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
        this.draw();
        this.initEvents();
        //setInterval(this.draw(), 200);
    }
}