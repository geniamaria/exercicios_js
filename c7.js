/**. Crie um array de objectos e use .every() para verificar se todos atendem a uma 
condição.  */

const person = {
    name: "maria",
    age: 30

}

function age(person) {
    return person > 18;

}
person.every(age);