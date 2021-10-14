// retorno de funcao com qualquer tipo primitivo do js.
//  Return só podem ser de um tipo, a fc já se finaliza, não se coloca mais nada depois do return. E nao colocar o mesmo nome de funcao.

function arr() {
    return [1,2,3,4,5,6,7,8,9,10];
}

console.log(arr()[0]);         // 1     Pegar a primeira posicao da arr

// fc para somar 2 numeros da array, das ultimas posicoes.
function calculo() {
    var soma = arr()[9] + arr()[9]
    return soma;                  // retorno para a var de escopo de bloco
}

console.log(calculo());


// ex3
// Obtem o resultado da string, que esta dentro da prop nome do obj da funcao.
function obj() {
    return {
        peso: 90,
        idade: 30,
        nome: 'Julio'
    }
}
console.log(obj().nome);

//Retornos para poder utilizar em outros lugares.
