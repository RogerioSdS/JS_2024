const frutaDesejada = 'jaboticaba';
let mensagem;

switch (frutaDesejada) {
    case 'banana':
        mensagem = 'Gosto muito';
        break;
        case 'maca':
        case 'pinha':
        case 'jaca':
        case 'pera':
        mensagem = 'Não gosto';
        break;
    default:
        mensagem = 'Gosto um pouco';
}

console.log(mensagem);