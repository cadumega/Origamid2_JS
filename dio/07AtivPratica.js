const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
]

// Criar uma fc que recebe o array alunos e um número que irá represenrtar a média final
function alunosAprovados (arr, media) {

}

// Pecorra o array e criar um novo array auxiliar apenas com os alunos cujas notas sáo maiores ou iguais a média final
function alunosAprovados (arr, media) {
    let aprovados = [];                        // Se declarar dentro do for ira criar um novo array para cada loop q der.

    for(let i=0; i < arr.length; i++) {
        if(arr[i].nota >= media ) {                    // aluno é representado pelo array[i].nota
            aprovados.push(arr[i].nome);              // elemento arr[i] é o elemento do indice de array
        }              
    }
    return aprovados;
}

// acesso nota e acesso nome, sintaxe mais complexa acima com obj destructuring

// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

function alunosAprovados (arr, media) {
    let aprovados = [];                        // Se declarar dentro do for ira criar um novo array para cada loop q der.

    for(let i=0; i < arr.length; i++) {
        const {nota,nome} = arr[i];               // igualar ao objeto array index arr[i] , 2 constantes

        if(nota >= media ) {                    // substituir por nota
            aprovados.push(nome);              //  substituir por nome.
        }              
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));   // chamar a fç para verificar no console
//['Joao', 'Sofia, 'Paulo']