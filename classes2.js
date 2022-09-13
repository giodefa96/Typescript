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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Moved " + distanceInMeters + " meters");
    };
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this; // non riceviamo errori perchè non stiamo accedendo alla proprietà nome della classe Animal
    }
    return Rhino;
}(Animal));
// creiamo una nuova animal instances
var kitty = new Animal("Cat");
console.log(kitty.name); // non possiamo accedere a questa proprietà!
var Mamma = /** @class */ (function () {
    function Mamma(theNames) {
        this.names = theNames;
    }
    Mamma.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Moved " + distanceInMeters + " meters");
    };
    return Mamma;
}());
var Gatto = /** @class */ (function (_super) {
    __extends(Gatto, _super);
    function Gatto() {
        return _super.call(this, "Gatto") || this; // non riceviamo errori perchè non stiamo accedendo alla proprietà nome della classe Animal
    }
    Gatto.prototype.getAnimalName = function () {
        return "this Animal instance has a name of ".concat(this.names);
    };
    return Gatto;
}(Mamma));
/*
Quindi se uso protected posso usare e avere più libertà
*/
var palù = new Gatto;
console.log(palù.getAnimalName());
palù.names; // non ci permette di accedervi!
/*
in questo modo almeno possiamo stare tranquilli
che nessuno potrà modificare quell'istanza.
Però attraverso i metodi è chiamabile senza problemi
quindi è sfruttabile!
*/
