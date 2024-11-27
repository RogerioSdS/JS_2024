let frutas = ['banana', 'maca', 'pera', 'jaca', 'uva'];
let frutas2 = new Array('morango', 'caqui', 'kiwi', 'poncan', 'jaboticaba');

let cesto = [...frutas,...frutas2];

console.log(cesto);

cesto.push('laranja');

console.log(cesto);

cesto.unshift('melancia'); //adiciona no inicio do array

console.log(cesto);

cesto.splice(1,0,'caju'); //posiciona o item no array

console.log(cesto);

console.log('No meu cesto tem:');

