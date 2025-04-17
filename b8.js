/**
 * Crie uma função que mescle dois objetos e retorne um novo objeto com todas 
as propriedades. 
 */

let obj1 = { name: "Maria", surname: "Moiane" };
let obj2 = { name: "Lucas", surname: "Moiane" };

let famile = {
    ...obj1,
    ...obj2
};
console.log(famile);