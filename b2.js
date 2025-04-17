//Crie um objeto aluno com nome, notas (array) e um método calcularMedia().

const studant = {
    name: "Lucas",
    notas: [10, 12, 11],
    calcularMedia: function (notas) {
        // for (let i = 0; i < notas.length; i++) {          const sum =+notas[i];;         }
        return this.notas.reduce((total, num) => total + num, 0) / this.notas.length;

    }
};
console.log(studant.calcularMedia());