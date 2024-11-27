const listaDeChamada = [
    {nome: 'Joaquim', sobrenome: 'Silva'},
    {nome: 'Maria', sobrenome: 'Souza'},
    {nome: 'Jorge', sobrenome: 'Santos'},
    {nome: 'Ana', sobrenome: 'Silva'},
    {nome: 'Joana', sobrenome: 'Souza'},
    {nome: 'João', sobrenome: 'Santos'}
]

const alunosSilva = listaDeChamada.map(aluno => {
    if (aluno.sobrenome === 'Silva') {
        return aluno; //onde não corresponde retorna undefined
    }
})
console.log(alunosSilva);

//corrigindo isso usando o filter
const alunosSantos = listaDeChamada.filter(aluno => aluno.sobrenome === 'Santos');
console.log(alunosSantos);


