/*
Ci permette di definire quali saranno le cosa da implementare
 */
var showState = function (person) {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
var anakin = {
    name: "Anakin Skywalker",
    isHungry: false,
    children: ['Luke', 'Leia']
};
/*
Se creiamo un interface è come se scrivessimo un contratto
quindi una certa creazione di un istanza oggetto dovrà seguire
determinate caratteristiche in modo tale da poter permettere
di creare solo quello che vogliamo
*/
console.log(showState(anakin));
