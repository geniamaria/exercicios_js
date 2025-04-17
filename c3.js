/**
 *  Some todos os números de um array usando .reduce(). 
 */


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = array.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(sum);