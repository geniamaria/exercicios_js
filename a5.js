/*Implemente uma função que recebe um número e retorna uma função que
        adiciona esse número a outro número passado posteriormente.*/

let n = 20;
let addNumber = (n) => {
    return n += n;
}
console.log(addNumber(3));