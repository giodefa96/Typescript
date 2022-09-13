const sum = (num: number, num2: number): number => {
    return num + num2;
}

console.log(sum(1,2));

/**
 sto punto di domanda o question mark viene definito il ternary operator.
 Esso valuta una certa condizione e se il valore è true fa una cosa sennò un'altra
 Syntax:

    condition ? value if true : value if false

 come in questo caso:
 typeof num == 'string' ? num = parseInt(num): null; 
 quindi la condizione è il tipo di num è una stringa? se si allora
 fai parseInt sennò non fare nulla!
 */


const sum2 = (num: string | number, num2: string | number): number  => {
    typeof num == 'string' ? num = parseInt(num): null; 
    typeof num2 == 'string' ? num2 = parseInt(num2): null;
    return num + num2;
}

console.log(sum2(42, "45"));

const sum3 = (): void  => {
    console.log("error inthe system");
}

/*
    Il termine void definisce nessun tipo di data type!
    mentre l'any definisce tutte le tipologie di dati
    Quindi nel nostro caso non dovrebbe returnare nulla!

    Quindi molto spesso è utilizzato per mandare un qualche
    tipo di messaggio e come vediamo nella funzione sum3 stiamo
    ritornando nessun valore ma solo un messaggio nel terminale.
 */

    sum3();


    const n: null = null;
    const u: undefined = undefined; // non molto utile!