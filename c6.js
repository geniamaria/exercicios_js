/**
 *  Crie um array de objectos e use .some() para verificar se algum deles atende a uma 
condição. 
 */
const person = {
    name: "maria",
    age: 30

}
person.some(age);
function age(person) {
    return person > 18;

}