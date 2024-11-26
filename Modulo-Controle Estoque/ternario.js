const mediaTemperatura = 'Brasil';

const temperatura = mediaTemperatura ==='Brasil' ? 33 : 19;

if(temperatura >= 30) {
    console.log('Pais quente!!!');
}else if(temperatura >= 20) {
    console.log('Pais de temperatura amena!!!');
}
else {
    console.log('Pais frio!!!');
}
