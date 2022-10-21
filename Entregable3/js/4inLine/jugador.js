

class Jugador {

    chips = []

    contructor(img, name, amountChips) {
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

    
}