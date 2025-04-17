/*Crie uma função que recebe um nome e um sobrenome e retorna um objeto {
        nome, sobrenome, nomeCompleto }. */

const name = "Maria";
const surname = "Moiane";
const fullname = "Maria Moiane";


let createFullName = (name, surname, fullname) => {
    return { name, surname, fullname: `${name} ${surname} ${fullname} ` }

};
console.log(createFullName("wilson julio malate"));