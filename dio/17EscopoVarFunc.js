let numero = 1;
function func() {
    var number = 5
    return numero + number;              // Utilizacao de var em escopo local
}

console.log(func());                     // chamada para var global

// console.log(number);   nao ira conseguir compreender a var local!!! da ERROR

// Desconsidera a global, pois esta com o mesmo nome, considera só a de escopo local. Distinguir nomes das variaveis.


// ex2. Problema que pode ocorrer ao substituir a variavel global
let numeroN = 1;
function funcTeste() {
    let numeroN = 5           // Lembrar de especificar var para nao substituir
    return numeroN;              // Utilizacao de var em escopo local
}

funcTeste();
console.log(numeroN);

// Argumentos de funções só existem em bloco, da funcao que estamos criando.

function funcArgs(a,b,c) {
    return a;               // So existe dentro de nossa fç esse arg.
}

// console.log(a);   // Error que nao esta definido
console.log(funcArgs('Retornado o valor de a'));