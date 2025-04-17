/**
 * Crie um objeto com métodos internos que manipulem suas propriedades. 

 */
const studant = {
    name: "Lucas",
    notas: [10, 12, 11],
    calcularMedia: function (notas) {
        return this.notas.reduce((total, num) => total + num, 0) / this.notas.length;

    }

};

console.log(studant.calcularMedia());