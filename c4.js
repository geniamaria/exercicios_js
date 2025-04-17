/**
 * . Ordene um array de números em ordem crescente e decrescente usando .sort().
 */
const array = [1, 10, 3, 8, 5, 0, 7, 4, 9, 2];
const ordem = array.sort((a, b) => a - b);
console.log(ordem);
array.sort((a, b) => a + b);
console.log(array);