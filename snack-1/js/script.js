// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const array = [];
let somma = 0;

do {
    numero = Number(prompt("Inserisci un numero"));
    if (isNaN(numero)) {
        alert("Puoi inserire solo numeri! Riprova:");
    } else {
        somma += numero;
        if (somma < 50) {
            array.push(numero);
        }
    }

} while (somma < 50 || isNaN(numero));

console.log(`array = ${array}`);
