let rg = {
    versao: 1
};

function addPropriedades(propriedade , valor) {
    Object.assign(rg, propriedade);
};

function updatePropriedade(propriedade, valor) {
    rg[propriedade] = valor;
};

function deletePropriedade(objeto,valor) {
    Reflect.deleteProperty(objeto, valor);
};

addPropriedades(
    {
        nome: 'Rogerio',
        sobrenome: 'Soares',
        idade: 41,
        estadoCivil: 'Casado',
        data: new Date()
    }
);

console.log(rg);

updatePropriedade('cidade', 'Birigui/SP');

console.log(rg);

updatePropriedade('cidade', 'São Paulo/SP');

console.log(rg);

deletePropriedade(rg,'cidade' );  

console.log(rg);
