/** escreva  uma funcao que recebe um array de objectos { nome, idade} e retorne o objecto com maior idade */

const person = [
    { name: 'Maria', idade: 23 },
    { name: 'wilson', idade: 27 },
    { name: 'Lucas', idade: 14 }
];


let longestAge = (person) => {
    for (let i = 0; i < person.length; i++) {
        if (person[i].idade > longest.idade) {//tenho um erro
            return longest = person[i];
        }


    }

}
console.log(longestAge(person));