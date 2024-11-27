
//Callback é o nome por convenção para passagem de funções como parâmetro
function hof( callback){
    // Gerar um número aleatório entre 1 e 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log("Passando por aqui antes de gerar o log de saida com o numero aleatorio");
    // Math.random() gera um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos por 100 para obter um número entre 0 e 100
    // E adicionamos 1 para obter um número entre 1 e 100
    callback(numeroAleatorio);

}

hof((num) => {
    console.log('O número gerado foi: ', num);
});