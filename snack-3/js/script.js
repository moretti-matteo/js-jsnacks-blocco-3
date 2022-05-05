// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// const divRed = document.querySelector("#red");
// const divGreen = document.querySelector("#green");

const main = document.querySelector("main");

const divGreen = document.createElement("div");
divGreen.classList.add("green");
divGreen.innerHTML += "<h6>Numeri pari</h6>";

const divRed = document.createElement("div");
divRed.innerHTML += "<h6>Numeri dispari</h6>";
divRed.classList.add("red");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter((elem) => {
    if (elem % 2 === 0) {
        divGreen.innerHTML += elem + "  ";
    } else {
        divRed.innerHTML += elem + "  ";
    }
});

main.append(divGreen, divRed);

// for (let i = 0; i < array.length; i++) {

//     if (array[i] % 2 === 0) {
//         divGreen.innerHTML += array[i] + "  ";
//     } else {
//         divRed.innerHTML += array[i] + "  ";
//     }
// }
