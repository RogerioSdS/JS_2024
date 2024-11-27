const valoresDeVendas = [ 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500];

// O método reduce é utilizado para transformar um array em um único valor.
// Ele recebe uma função de callback com dois parâmetros: o acumulador (total) e o valor atual do array.
// O retorno da função de callback se torna o novo valor do acumulador.
// O segundo parâmetro do reduce é o valor inicial do acumulador.
// Neste exemplo, o acumulador começa em zero para somar todos os valores do array.
const totalDeVendas = valoresDeVendas.reduce((total, valor) => total + valor, 0);
console.log(totalDeVendas);

const valoresVendaLoja1 = [
    {
      vendedor: "Joaquim",
      valor: 1000,
    },
    {
      vendedor: "Maria",
      valor: 2000,
    },
    {
      vendedor: "Joaquim",
      valor: 1500,
    },
    {
      vendedor: "Joana",
      valor: 2500,
    },
    {
      vendedor: "João",
      valor: 3000,
    },
    {
      vendedor: "Joana",
      valor: 4000,
    },
    {
      vendedor: "João",
      valor: 5000,
    },
  ];

  const vendaTotalDeCadaVendedor = valoresVendaLoja1.reduce((somaParcial , venda) => {
    if(somaParcial[venda.vendedor]){
        somaParcial[venda.vendedor] += venda.valor;
    }else{
        somaParcial[venda.vendedor] = venda.valor;
    }

    return somaParcial;
  },{Joel: 2000}//segundo parâmetro do reduce, um objeto vazio. posso inicializar com um objeto preenchido
);

console.log(vendaTotalDeCadaVendedor);