var carro = {
    portas: 4,
    marcar:'Fiat',
    cor:'preto'
}

var modelo;
function teste() {
    if(carro.portas === 4) {
        modelo = 'Modelo 4 portas'
        console.log(modelo);
    } else {
        modelo = 'Modelo 2 portas'
        console.log(modelo);
    }
}

teste(); 

// Verificou dentro do objeto carro, se a prop carro tinha exatamente o valor 4 , e preencheu o valor da variavel com o Modelo 4 portas. E logo em seguida executou a variavel log modelo

// Condicional Ternario - em uma linha para substituir o if e else
// Testes curtos e visualizacao do codigo. Temos a condicao, caso true e caso false

var modeloT;
var ternario = 

    carro.portas === 4 ? modeloT = 'Quatro Portas' : 'Duas Portas';

console.log(ternario);