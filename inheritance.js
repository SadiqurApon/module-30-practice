class Vehicals {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    move() {
        console.log("I can move");
    }
}

class Bus extends Vehicals {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    rout() {
        console.log("Dhaka to Cox's");
    }
}

class Track extends Vehicals {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
    malBahi(){
        console.log("it can carry extra weight");
    }
}

const greenLine = new Bus("greenLine", "1200", 50);
// console.log(greenLine);
greenLine.move();