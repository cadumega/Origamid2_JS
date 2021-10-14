// Variaveis que contem propriedades, passa diversas props para ele, conjunto de propriedades com informações.
// Ao passar o mouse verá os tipos primitivos dos valores.

var pessoa = {
    idade: 17,
    nome: 'Julio Lopes',
    altura: 1.80,
    casado: false,
}

function apresentar() {
    console.log(
        `O nome da pessoa é: ${pessoa.nome}.
        A idade dela é ${pessoa.idade}`);

    if (pessoa.idade >= 18) {
        console.log('A pessoa é MAIOR de idade!');
    } else {
        console.log('A pessoa é MENOR de idade.')
    }
};
apresentar();              // Invocar,executar function


// ex.2
//Atribuir uma variavel dentro dessa função
console.log('===========');
function apresentar2() {
    console.log(
        `O nome da pessoa é: ${pessoa.nome}.
        A idade dela é ${pessoa.idade}`);

    let calculo = pessoa.idade + pessoa.altura;
    console.log('Resultado do cálculo é: ' + calculo);

    if (pessoa.idade >= 18) {
        console.log('A pessoa é MAIOR de idade!');
    } else {
        console.log('A pessoa é MENOR de idade.')
    }
};
apresentar2(); 

console.log('===========');
// ex3
// Atribuir uma função a uma variável de forma primária. Chamada de função de diferentes formas.
var fun = function () {

    let calculo = pessoa.idade + pessoa.altura;
    console.log('Resultado do cálculo é: ' + calculo);

    if (pessoa.idade >= 18) {
        console.log('A pessoa é MAIOR de idade!');
    } else {
        console.log('A pessoa é MENOR de idade.')
    }
};
fun();