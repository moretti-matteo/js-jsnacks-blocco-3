// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const divRed = document.querySelector("#red");
const divGreen = document.querySelector("#green");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 === 0) {
        divGreen.innerHTML += array[i] + "  ";
    } else {
        divRed.innerHTML += array[i] + "  ";
    }
}
