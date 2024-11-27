const pessoa = {
    nome: 'Rogerio',
    sobrenome: 'Soares',
    cidade: "Birigui/SP",

    livrosPreferidos: [
        {
            titulo: 'O Senhor dos Aneis',
            autor: 'JRR Tolkien',
            ano: 1954
        },
        {
            titulo: 'O Hobbit',
            autor: 'JRR Tolkien',
            ano: 1937
        },
        {
            titulo: 'O Senhor dos Aneis e as Duas Torres',
            autor: 'JRR Tolkien',
            ano: 1959
        }
    ],

    apresentacao: function() { 
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e moro na cidade de ${this.cidade}`);  
    }
}

// O Reflect é um objeto que permite a manipulacao de objetos de forma mais dinamica.
// Com o Reflect, podemos criar, deletar, alterar e obter propriedades de um objeto.
// Ele  uma forma mais segura de lidar com objetos, pois ele sempre retorna um valor booleano,
// indicando se a operacao foi bem sucedida ou nao.
// Aqui estamos adicionando a propriedade "profissao" com valor "Desenvolvedor" ao objeto pessoa.
Reflect.set(pessoa, 'profissao', 'Desenvolvedor');

// O Object.assign()  um metodo que copia todas as propriedades enumeraveis de um ou mais objetos de origem para um objeto alvo.
// Ele retorna o objeto alvo.
// A sintaxe  Object.assign(alvo, fonte1, fonte2, ... fonteN)
// Essa linha de codigo, esta adicionando as propriedades "idade" e "estadoCivil" ao objeto pessoa.
// O objeto "alvo"  o objeto pessoa, e as fontes sao os objetos que contem as propriedades idade e estadoCivil.
Object.assign(pessoa, {
    idade: 41,
    estadoCivil: 'Casado'
});


delete pessoa.sobrenome;

// O Reflect.deleteProperty()  um metodo que deleta uma propriedade de um objeto.
// Ele retorna um booleano indicando se a operacao foi bem sucedida ou nao.
// A sintaxe  Reflect.deleteProperty(objeto, propriedade)
Reflect.deleteProperty(pessoa, 'cidade');

console.log(pessoa); 

