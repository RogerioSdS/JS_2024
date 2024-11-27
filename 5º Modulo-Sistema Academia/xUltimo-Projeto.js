let alunos = [
    {
      id: 1,
      nome: "João",
      estaPresente: true,
      mensalidade: 300
    },
    {
      id: 2,
      nome: "Maria",
      estaPresente: false,
      mensalidade: 350
    },
    {
      id: 3,
      nome: "Pedro",
      estaPresente: true,
      mensalidade: 200
    },
    {
      id: 4,
      nome: "Ana",
      estaPresente: true,
      mensalidade: 250
    },
    {
      id: 5,
      nome: "Lucas",
      estaPresente: false,
      mensalidade: 300
    },
    {
      id: 6,
      nome: "Beatriz",
      estaPresente: true,
      mensalidade: 400
    },
    {
      id: 7,
      nome: "Carlos",
      estaPresente: true,
      mensalidade: 500
    },
    {
      id: 8,
      nome: "Fernanda",
      estaPresente: false,
      mensalidade: 450
    },
    {
      id: 9,
      nome: "Juliana",
      estaPresente: true,
      mensalidade: 350
    },
    {
      id: 10,
      nome: "Marcos",
      estaPresente: false,
      mensalidade: 300
    }
  ];

function ordenaClientes(){
    const alunosOrdenados = alunos.sort((alunoA, alunoB) => {
        if(alunoA.nome < alunoB.nome){
            return -1; 
        }
        if(alunoA.nome > alunoB.nome){
            return 1;
        }
        return 0;
    });

    return alunosOrdenados;
}

function geraRelatorio(...callbacks){
    for (const callback of callbacks) {
        const result = callback
        console.log(result);
    }
}

function calculaFaturamento() {
    const faturamento = alunos.reduce((total, aluno) => total + aluno.mensalidade, 0);

    return faturamento;
}

function removeCliente(id) {
    const listaFiltrada =  alunos.filter((aluno) => aluno.id !== id);; //o filter vai deixar todos os alunos que nao tem o id dele
    return listaFiltrada;
  };

function chamaNaRecepcao(id) {
    const aluno = alunos.find((aluno) => 
        {return aluno.id === id}
    );

    if(!aluno){
        console.log("Aluno nao encontrado");
    }

    else if(!aluno.estaPresente && aluno){
        console.log("Aluno nao esta presente");
    }
    else{
        console.log("Alerta, aluno "+aluno.nome+" comparecer na recepção");
    }

}

function entradaSaida(id) {
  alunos = alunos.map((aluno) => {
    if (aluno.id !== id) {
      return aluno;
    }

    return { ...aluno, estaPresente: !aluno.estaPresente };
  });
}

function cadastrarCLiente(novoCliente) {
    alunos.push(novoCliente);
  };

cadastrarCLiente({
    id: 11,
    nome: "Rafael",
    estaPresente: true,
    mensalidade: 400
  });
  
const listaAtualizada = removeCliente(1);
alunos = [...listaAtualizada];

entradaSaida(2);

chamaNaRecepcao(1);

const faturamento = calculaFaturamento();

geraRelatorio(calculaFaturamento(), ordenaClientes());