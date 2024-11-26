let produtos = [
    {
        "id": 500,
        "quantidade": 5
    },
    {
        "id": 501,
        "quantidade": 10
    }
];

function comprarProduto(idProduto, quantidade) {
    let estoque = confereEstoque(idProduto);
    if (estoque) {
        if (estoque.quantidade >= quantidade) {
            estoque.quantidade -= quantidade; // Atualiza a quantidade em estoque
            console.log(`Compra realizada! ${quantidade} unidades do produto ${idProduto} compradas.`);
        } else {
            console.log("Quantidade insuficiente em estoque.");
        }
    } else {
        console.log("Produto não encontrado.");
    }
}

function confereEstoque(idProduto) {
    return produtos.find((produto) => produto.id === idProduto); // Retorna o produto se encontrado
}

// Testando a função
comprarProduto(500, 3); // Compra 3 unidades do produto com id 500
comprarProduto(501, 15); // Tenta comprar 15 unidades do produto com id 501 (quantidade insuficiente)
comprarProduto(999, 1);  // Tenta comprar um produto com id inexistente
