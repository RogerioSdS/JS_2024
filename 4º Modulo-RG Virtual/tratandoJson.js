const pessoa = {
    nome: 'Rogerio',
    sobrenome: 'Soares',
    cidade: "Birigui/SP",
    idade: 41,
    estadoCivil: 'Casado',
};

const jsonString = JSON.stringify(pessoa); // Transforma o objeto json em uma string
const json = JSON.parse(jsonString); // Transforma uma string em um objeto

console.log(jsonString); 
console.log(jsonString.nome); //não vai funcionar pois é uma string
console.log(json);
console.log(json.nome);
console.log(pessoa);