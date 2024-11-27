//A função spread é uma sintaxe de espalhamento de arrays, que permite 
//"descompactar" um array e passar seus elementos como argumentos para uma função.
//Exemplo: 
const soma = (num1, num2, num3) => num1 + num2 + num3;
const nums = [1, 2, 3];
console.log(soma(...nums)); //6

//Outro exemplo é criar um novo array com os elementos de outro array:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // arr2 é [1, 2, 3, 4, 5, 6]

console.log(arr2);

function spread(palavra1, palavra2, ...palavrasRestatntes) {
    console.log(palavra1);
    console.log(palavra2);
    console.log(palavrasRestatntes);
}


spread('Deus', 'seja', 'sempre', 'louvado', 'por', 'todo', 'sempre');

//Tamb m podemos atribuir um objeto a outro com o spread
const obj1 = {
    nome: 'Rogerio',
    sobrenome: 'Soares'
};

const obj2 = {
    ...obj1,
    nome: 'Julia',
    cidade: 'Birigui/SP'
};

console.log(obj1);
console.log(obj2);
