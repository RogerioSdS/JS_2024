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
    vendedor: "Jorge",
    valor: 1500,
  },
  {
    vendedor: "Ana",
    valor: 2500,
  },
  {
    vendedor: "Jeferson",
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


const rankingDeVendedores = valoresVendaLoja1.sort((vendedorA, vendedorB) => {
    if (vendedorA.valor > vendedorB.valor) {
      return -1;
    } else if (vendedorA.valor < vendedorB.valor) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(rankingDeVendedores);

  
const rankingDeVendedores2 = valoresVendaLoja1.sort((vendedorA, vendedorB) => { vendedorA.valor - vendedorB.valor });
console.log(rankingDeVendedores2);

/***
 * explicando o sort
 * 
 * 
Passo a Passo do sort()
Compara Joaquim (1000) e Maria (2000):
Maria fica antes de Joaquim.
Array (parcialmente ordenado):
Maria, Joaquim, Jorge, Ana, Jeferson, Joana, João

Compara Maria (2000) e Jorge (1500):
Maria mantém sua posição.
Jorge fica antes de Joaquim.
Array:
Maria, Jorge, Joaquim, Ana, Jeferson, Joana, João

Compara Jorge (1500) e Ana (2500):
Ana vai para a frente.
Array:
Maria, Ana, Jorge, Joaquim, Jeferson, Joana, João

Compara Ana (2500) e Jeferson (3000):
Jeferson vai para a frente.
Array:
Maria, Jeferson, Ana, Jorge, Joaquim, Joana, João

Compara Jeferson (3000) e Joana (4000):
Joana vai para a frente.
Array:
Joana, Jeferson, Maria, Ana, Jorge, Joaquim, João

Compara Joana (4000) e João (5000):
João vai para a frente.
Array final:
João, Joana, Jeferson, Ana, Maria, Jorge, Joaquim

Resultado Final:
João (5000) → Joana (4000) → Jeferson (3000) → Ana (2500) → Maria (2000) → Jorge (1500) → Joaquim (1000)
 */