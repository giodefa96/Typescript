"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}
let greeter = new Greeter("How are you?");
console.log(greeter.greet());
/*
ogni caratteristica della nostra classe è public di base se
non facciamo altrimenti
 */
// super() methods solito metodo per creare inerit..
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log("moved " + distanceInMeters + " meters");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
    }
}
let snake = new Snake("Slithy");
console.log(snake.move());
