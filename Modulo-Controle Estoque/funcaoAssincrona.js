function operacaoAssincrona() {
return new Promise(
    resolve => {
        const palavras = [
            'Amor', 'Amizade', 'Feliz', 'Sorrindo', 'Alegria', 
            'Esperança', 'Gratidão', 'Sucesso', 'Coração', 'Motivação',
            'Empatia', 'Determinação', 'Equilíbrio', 'Confiança', 'Prosperidade', 
            'Paz', 'Realização', 'Vontade', 'Entusiasmo', 'Coragem',
            'Sonhos', 'Superação', 'Liberdade', 'Harmonia', 'Conquista', 'Inspiração'
          ];
          ;
        const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        setTimeout(() => {
            resolve(palavraAleatoria);
        }, 2000);
        
    }
)
};

console.log('Gerando palavra do dia');
async function executarOperacaoAssincrona() {
    try {
        const palavra = await operacaoAssincrona();
        console.log(palavra+'.....');
    } catch (error) {
        console.log(error);
    }
    console.log('Até amanhã');
}
executarOperacaoAssincrona();