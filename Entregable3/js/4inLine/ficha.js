'use strict';

class Ficha {

    constructor(r, ctx) {
        this.width = 2*r;
        this.height = 2*r;
        this.posX = 100;
        this.posY = 400;
        ctx.beginPath();
        ctx.arc(100, 400, r, 0, 2 * Math.PI);
    }

    draw(img = null) {
        ctx.fillStyle = '00ff00';
        //img = document.getElementById('char1');
        //pattern = ctx.createPattern(img, 'no-repeat');
        //ctx.fillStyle = pattern;
        ctx.fill();
    }

    checkSelected(x, y) {
        return x > (this.posX - this.width/2) && x < (this.posX + this.width/2) && (y > this.posY - this.height/2)  && y < (this.posY + this.height/2);
    }

    isSelected() {
        console.log(this.selected);
        return this.selected;
    }

    setIsSelected(selected) {
        this.selected = selected;
    }

    move(x, y){
        this.posX = x;
        this.posY = y;
    }



}