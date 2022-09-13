class Greeter{
    public greeting: string
    public constructor(message: string){
        this.greeting = message
    }
    public greet(){
        return "Hello " + this.greeting
    }
}

let greeter = new Greeter("How are you?")
console.log(greeter.greet());

/*
ogni caratteristica della nostra classe è public di base se
non facciamo altrimenti
 */

// super() methods solito metodo per creare inerit..

class Animal {
    name: string
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log("moved " + distanceInMeters + " meters");
        
    }
}

class Snake extends Animal{
    constructor(name: string){
        super(name)
    }
    move(distanceInMeters = 5){
        super.move(distanceInMeters);
    }
}


let snake = new Snake("Slithy");

console.log(snake.move());


