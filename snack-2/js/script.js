// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const N = Number(prompt("scrivere un numero"));


for (let i = 0; i < N; i++) {

    const array = [];

    for (let j = 0; j < 10; j++) {
        const random = Math.floor(Math.random() * 100) + 1;
        array.push(random);

    }

    console.log(`Array N° ${i + 1} = ${array}`);

}
