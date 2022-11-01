"use strict";

let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

class Ficha {

    constructor(posX, posY, r, pic) {
        this.r = r;
        this.posX = posX;
        this.posY = posY;
        this.char = pic;
    }

    setPosX(x) {
        this.posX = x;
    }

    setPosY(y) {
        this.posY = y;
    }

    setSrc(pic) {
        this.char = pic;
    }

    setR(r) {
        this.r = r;
    }

    drawChip(x, y) {
        let img = this.char;
        x = this.posX;
        y = this.posY;
        ctx.drawImage(img, x, y, 49, 49);
    }


    checkSelected(x, y) {
        return x > (this.posX - this.r) && x < (this.posX + this.r) && (y > this.posY - this.r) && y < (this.posY + this.r);
    }

    isSelected() {
        return this.selected;
    }

    setSelected(selected) {
        this.selected = selected;
    }

    move(x, y, e) {
        if (x > this.r && x < (1024 - this.r) && y > this.r && y < (530 - this.r)) {
            this.posX = x;
            this.posY = y;
        }
    }

}