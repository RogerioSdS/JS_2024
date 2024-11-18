// o addeventlistener adiciona um evento a um elemento, nesse caso o "document" que e o proprio documento html
// o evento adicionado e o "DOMContentLoaded" que e um evento que ocorre quando o documento html ja foi completamente carregado
// ou seja, nesse momento todos os elementos ja estao disponiveis para serem manipulados por meio do javascript
// o callback (fun o que sera executada quando o evento ocorrer) sera executada assim que o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    let numeroAtual = 0;
    const numeroNoHTML = document.getElementById('numero-atual');
    const botaoSoma = document.getElementById('botao-que-soma');
    const botaoSub = document.getElementById('botao-que-subtrai');

    function atualizaNumeroNoHTML(){
        numeroNoHTML.textContent = numeroAtual;
    }

    botaoSoma.addEventListener('click', () => {
        numeroAtual++;
        atualizaNumeroNoHTML();
    })

    botaoSub.addEventListener('click', () => {
        numeroAtual--;
        atualizaNumeroNoHTML();
    })
    
});