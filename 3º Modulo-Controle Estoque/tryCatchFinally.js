function dividindo(num1, num2) {
  try {
    // Tente executar o código que pode gerar um erro
    let resultado = num1 / num2;
    if (!isFinite(resultado)) {
      throw new Error("Não é possível dividir por zero");
    }
    console.log("Resultado:", resultado);
  } catch (erro) {
    // O código aqui é executado se ocorrer um erro no bloco try
    console.log("Ocorreu um erro:", erro.message);
  } finally {
    // O código no bloco finally sempre será executado, independentemente de erro ou não
    console.log("O bloco finally foi executado.");
  }
}

dividindo(10, 0);