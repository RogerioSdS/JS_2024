/*Tipos Primitivos :
Primitivos são dados simples armazenados diretamente na memória. São:

String: "texto",
Number: 42,
Boolean: true/false,
Undefined: não definido,
Null: vazio,
Symbol, e
BigInt.
Imutável:
Valores primitivos não podem ser alterados. Qualquer operação cria um novo valor.
Exemplo:*/

let texto = "Olá";
texto[0] = "X"; // Não altera o texto
console.log(texto); // "Olá"
console.log(typeof(texto)) // string

texto = texto + ", mundo!"; // Cria um novo valor
console.log(texto); // "Olá, mundo!"

/*
Tipos de Referência:
São objetos (Array, Function, Object) e armazenam referências (endereços de memória).
Alterar seus valores não cria novos objetos, mas modifica os dados no mesmo endereço.
Exemplo:*/

let arr = [1, 2];
arr.push(3); // Modifica o array
console.log(arr); // [1, 2, 3]





