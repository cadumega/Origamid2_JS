
// array auxiliar que inicializamos com nada

// inicializamos o indice , indica = o, em qt o indice for menor que o tamanho da array entao incrementamos
// metodo de push para add elemento ao fina lda array
// rodou por todos os numeros da array
function multiplicadoPorDois(arr) {
    let multiplicados = [];


    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicadoPorDois(meusNumeros);  // [4,66,912,712,80]


// FOR IN para propriedades enumeráveis dentro do objeto.
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Joao",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);  // nome // idade // cidade