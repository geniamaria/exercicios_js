/**
 * Gere um número aleatório entre dois valores definidos.
 */
let max=20;
let min=3;
let number = Math.floor(Math.random() * (max - min + 1) + min);

console.log(number);