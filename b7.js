/**
 * . Utilize JSON.stringify() e JSON.parse() para converter um objeto em string e vice
versa. 
 */
let text = '{"employees":[' +
    '{"name": "Maria", "surname": "Moiane"}, ' +
    '{"name": "Wilson", "surname": "Malate"},' +
    '{"name": "Lucas", "surname": "Moiane"}]}';

console.log(JSON.parse(text));
console.log(JSON.stringify(text));



