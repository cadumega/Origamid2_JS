//Def comum de fç , variáveis criadas dentro de uma f© apenas podem ser utilizadas dentro dela.
function name(parametros) {
    // instrucoes
    return;         // Return para a fç de ser executada, pode ou não retornar valor. Pode usar em outras operacoes
}

//Fç anonima - fç que representam expressoes
// Uma var pode armazenar uma fç
// Armazenamos o valor dentro de uma variavel
const soma = function (a,b) {
    return a + b;
}
soma(1,2) //3
soma(5,4) // 9

//Fç autoinvocavel 
// Uma fc anonima entre (), seguida por outro par de parenteses, que represente a sua chamada.

(function () {
    let name = "Digital Innovation One"
    return name
}
)();

//Podemos ter f;c com parametros ou armazenada em uma variavel.
(
    function (a,b) {
        return a + b;
    }
) (1,2);
//3

const soma3 = {
    function() {
        return a + b;
    }
} (1,2);

console.log(soma3);  //3

//Callbacks - fç passada como argumento/param para outra fç
// fc recebe op,num1 e num2

const calc = function (operacao, num1,num2) {
    return operacao(num1,num2);
}

const soma = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1,num2) {
    return num1-num2;
}

const resultSoma = calc(soma, 1, 2);        // callback soma
const resultSub = calc(sub, 1, 2);            // argumentos 1 e 2 alem do callback sub

console.log(resultSub); // -1    // callback nao é executado em ordem de declaracao - 
console.log(resultSoma); //3

// Fc passada como argumento em uma var.