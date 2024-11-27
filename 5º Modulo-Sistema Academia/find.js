const listaDeChamada = [
    {nome: 'Ana', sobrenome: 'Silva'},
    {nome: 'Joaquim', sobrenome: 'Silva'},
    {nome: 'Maria', sobrenome: 'Souza'},
    {nome: 'Jorge', sobrenome: 'Santos'},
    {nome: 'Joana', sobrenome: 'Souza'},
    {nome: 'João', sobrenome: 'Santos'}
]

const alunosSilva = listaDeChamada.find(aluno => aluno.sobrenome === 'Silva'); //encontra o primeiro
console.log(alunosSilva);


