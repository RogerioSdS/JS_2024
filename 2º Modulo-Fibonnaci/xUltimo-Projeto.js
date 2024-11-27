function fazerFibonacci(numeroAnterior, contador, limite, aurea = 0) {
    if (contador > limite) {
      console.log('A proporção aurea é: ', aurea/contador);
      return; 
    }
  
    console.log(numeroAnterior); 
    let numeroProximo = numeroAnterior + contador;
    aurea = numeroProximo
    fazerFibonacci(numeroProximo, numeroAnterior, limite, aurea);
  }
  
  let inicio = 1; 
  let segundo = 0; 
  let limite = 1000; 
  
  fazerFibonacci(inicio, segundo, limite);