const helloWorld = function () {
    return "Hello World";
}

const helloWorld = () => "Hello World";  // JS presumi o return já

const soma = (a, b) => a + b;
soma(4, 6); // 10

const soma = a => a;      //dispensar o parenteser se tiver um param só
soma(4) //4


//  Arrow Functio NÃO faz hoisting. A ordem importa, a declaracao precisa ser antes para inicializar a fc.
//correct:
soma(2,4);
function soma(a,b) {
    return a + b
}

// Error X:
soma(2,4)
const soma = (a,b) => a + b; // ERROR Caannot acess 'soma'befgore initialization.

// __________OBS!!!!!!!!! _______________
//  Metodos de this, nao funcionam em arrow function. Nao existe o objeto arguments que junta em uma lista, nao existe em arrow function e nem new MeuObjeto.
//  Nao faça arrow functions serem metodos de objeto. Sempre utiliza uma funçao comum.