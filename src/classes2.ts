/*
In questa lezione ossereremo come proteggere le classi stile
c# ecc...

di base ogni membro della classe è utilizzato come public quindi
non deve essere inserito.

Se vogliamo mettere uno di questi membri della classe come privato o protetto
dobbiamo farlo.

Private e Protect funionano un po' alla stessa maniera,
dove queste ci permettono di non far accedere dall'esterno

nel caso in esempio vediamo come possiamo mettere privato
alla caratteristica name!
*/

class Animal {
    private name: string
    constructor(theName: string){
        this.name = theName
    }
    move(distanceInMeters: number = 0){
        console.log("Moved " + distanceInMeters + " meters");
        
    }
}

class Rhino extends Animal{
    constructor(){
        super("Rhino") // non riceviamo errori perchè non stiamo accedendo alla proprietà nome della classe Animal
    }
}

// creiamo una nuova animal instances

let kitty = new Animal("Cat");
console.log(kitty.name) // non possiamo accedere a questa proprietà!


class Mamma {
    protected names: string
    constructor(theNames: string){
        this.names = theNames
    }
    move(distanceInMeters: number = 0){
        console.log("Moved " + distanceInMeters + " meters");
        
    }
}


class Gatto extends Mamma{
    constructor(){
        super("Gatto") // non riceviamo errori perchè non stiamo accedendo alla proprietà nome della classe Animal
    }
    getAnimalName(){
        return `this Animal instance has a name of ${this.names}`
    }
}

/*
Quindi se uso protected posso usare e avere più libertà
*/

let palù = new Gatto;
console.log(palù.getAnimalName());
palù.names // non ci permette di accedervi!

/*
in questo modo almeno possiamo stare tranquilli
che nessuno potrà modificare quell'istanza.
Però attraverso i metodi è chiamabile senza problemi
quindi è sfruttabile!
*/
