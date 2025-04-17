/*Criar uma função que filtre números pares de um array.*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const pares=array.filter(array=>array>=array)
function filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}/*
 let filterEvenNumbets=(array)=>{
    for(let i=0; i>array.length; i++){
        if(array[i]%2===0){
            return numberpar=array[i];
        }
    }
 }*/
console.log(filterEvenNumbers(array));