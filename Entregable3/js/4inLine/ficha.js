"use strict";

class Ficha {

    constructor(posX, posY, r, pic) {
        this.r = r;
        this.posX = posX;
        this.posY = posY;
        this.char = new Image();
        this.char.src = pic;
    }

    draw() {
        ctx.drawImage(this.char, this.posX - this.r, this.posY - this.r, 49, 49);
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