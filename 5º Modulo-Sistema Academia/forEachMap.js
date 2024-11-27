let frutas = ['banana', 'maca', 'pera', 'jaca', 'uva'];
let frutas2 = new Array('morango', 'caqui', 'kiwi', 'poncan', 'jaboticaba');

let cesto = [...frutas,...frutas2];

console.log('No meu cesto tem:');

cesto.forEach((fruta) => {
    console.log(fruta);
});

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.map((numero, index) => {
    return numero * 2;
});

console.log(numerosPares);

const numbers = [1, 2, 3, 4];

const result = numbers.map((num, index, array) => {
  console.log(`Elemento: ${num}, Índice: ${index}, Array completo: ${array}`);
  return num * 2;
});

console.log(result);
