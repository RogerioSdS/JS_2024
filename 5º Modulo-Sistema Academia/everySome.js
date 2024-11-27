const listaDeChamada = [
    {nome: 'Joaquim', sobrenome: 'Silva'},
    {nome: 'Maria', sobrenome: 'Souza'},
    {nome: 'Jorge', sobrenome: 'Santos'},
    {nome: 'Ana', sobrenome: 'Silva'},
    {nome: 'Joana', sobrenome: 'Souza'},
    {nome: 'João', sobrenome: 'Santos'}
]

const alunosSilva = listaDeChamada.some(aluno => aluno.sobrenome === 'Silva'); //pesquisa se existe algum verdadeiro
console.log(alunosSilva);

const alunosSantos = listaDeChamada.every(aluno => aluno.sobrenome === 'Santos'); //pesquisa se todos são verdadeiros
console.log(alunosSantos);