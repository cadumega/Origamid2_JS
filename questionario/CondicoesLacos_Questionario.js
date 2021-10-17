// Condicionais
// 1 - Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de folga!!!".
let diaDeSemana = 'domingo';                 // alterar o value retorna diferentes strings, conforme a condicao criada.
if (diaDeSemana == "domingo") {
    console.log("Hoje é dia de folga!");
} else {
    console.log('Vai estudar!');
};

console.log('_______________');

// 2 - Defina a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar "Hoje é dia de futebol!!!" se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia lazer".
function hojeSeJoga(diaDaSemana) {
    if (diaDaSemana == 'domingo') {
        return ('Hoje é dia de futebol!')
    } else {
        return ('Hoje não é dia de lazer.')
    }
};


console.log(hojeSeJoga("domingo"));
console.log(hojeSeJoga("terça"));

console.log('_______________');

// 3 - Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.
function eMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + ' é maior';
    } else {
        return numero2 + ' é maior'
    };
};
console.log(eMaior(2, 9));

console.log('_______________');

// 4 - Escreva a função eNumeroDaSorte que, recebendo um número, diz se é um número da sorte (true). Podemos dizer que é um número da sorte se o número: 1-é positivo. 2-é um múltiplo de 2 ou 3. 3-não é 15. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.
function eNumeroDaSorte(number1) {
    return number1 >= 1 && number1 % 2 == 0 && number1 != 15;
}
console.log(eNumeroDaSorte(5));

console.log('_______________');
// fiz a expressao sem usar instrucao if, else if , else , expressao com operadores &&

// 5 - Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto. Logo fds não abre.
function possoIrAoBanco(diaDaSemana, horaAtual) {
    // return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" 
    // && horaAtual >= 9 && horaAtual <= 15;
    if (diaDaSemana === 'Sábado' && 'Domingo') {
        console.log('Não consigo ir ao banco');
    } if (horaAtual >= 9 && horaAtual <= 15) {
        console.log('Consigo ir ao banco!');
    } else {
        console.log('Banco fechado.');
    }
}

possoIrAoBanco('Terça', 20);                          // execucao da funcao
possoIrAoBanco('Domingo', 20);
possoIrAoBanco('Segunda', 9);

// console.log(possoIrAoBanco("Terça", 10));
// console.log(possoIrAoBanco('Sábado', 11));
// console.log(possoIrAoBanco('Domingo', 13));

// Uso de operadores para resolver a questao 
console.log('_______________');

// 6 - Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. 
// Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.
function filosofoHipster(profissao, nacionalidade, kmDia) {
    return profissao == 'Músico' && nacionalidade == 'Brasil' && kmDia >= 5 
  
}

console.log(filosofoHipster('Músico', 'Brasil', 10));
console.log(filosofoHipster('Jogador de futebol', 'Alemanha', 12));
console.log(filosofoHipster('Músico', 'Argentina', 1));

console.log('_______________');

// 7 - Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem.Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.
function podeSeAposentar(idade, sexo, anosContribuicao) {
    return idade >= 60 && sexo == "F" && anosContribuicao >=30 
    || idade >= 65 && sexo == "M" && anosContribuicao >= 30;
}

console.log(podeSeAposentar(62, "F", 34));            // Atentar o mínimo para se aposentar difere M e F

console.log('_______________');


// 8 - Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.
function podeSubir (alturaPessoa,vemComCompania,temProblemaCardiaco) {
    return alturaPessoa >= 1.5 && temProblemaCardiaco == false 
    || alturaPessoa >= 1.2 && vemComCompania == true && temProblemaCardiaco == false;
};

console.log(podeSubir(1.7, false, true));
console.log(podeSubir(1.2, true, false));

console.log('_______________');

// 9 - Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.
function medalhaSegundoOPosto(posto) {
    if (posto == 1) {
        return "ouro"
    };
    if (posto == 2) {
        return "prata"
    };
    if (posto == 3) {
        return "bronze"
    } else {
        return "Continue participando"
    };
};
console.log(medalhaSegundoOPosto(1));
console.log(medalhaSegundoOPosto(2));
console.log(medalhaSegundoOPosto(3));
console.log(medalhaSegundoOPosto(5));

// Laços
// 1 - Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.

// 2 - Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.

// 3 - Escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i.

// 4 - Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.

// 5 - Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.

// 6 - Escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.

// 7 - Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0.

// 8 - Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele.

// 9 - Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.

// Arrays
// 1 - Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o console.log. Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o console.log.

// 2 - Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

// 3 - Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

// 4 - Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas.

// 5 - Escreva a função quantidadeDeMesesComPerda

// 6 - Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura do exercício dos exercícios anteriores.

// 7 - Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, uma por cada carta desse naipe seguindo as cartas do truco. Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9.




// Desafios
// 1 - Escreva as seguintes funções:

// 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 

// 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não.
// Por exemplo:

// acontece(alunosDaSegunda, 2)
// true

// aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
// [true, false, false]
// 2 - Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si. Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

// 3 - Escreva uma função fatorial, que calcule o fatorial de um número.

// 4 - Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

// 1. na primeira posição, a fração de números que são positivos

// 2. na segunda posição, a fração de números que são zero

// 3. na última posição, a fração de números que são negativos
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar[0.5, 0.25, 0.25], devido a que há 50 % de positivos, 25 % de zeros, e 25 % de negativos.

// 5 - Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta. Queremos representar uma escada com altura variável, utilizando um array de strings. Por exemplo, uma escada com altura 3, representaremos com o seguinte array:

// var escada3 = [
//     "  #",
//     " ##",
//     "###"
// ]
// 6 - Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura. As árvores utópicas crescem de uma forma particular, em dois ciclos: 1- cada primavera dobram seu tamanho 2- cada verão crescem um metro Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos? Alguns exemplos:

// si N = 0, sua altura será 1 metro(não cresceu nada)

// si N = 1, sua altura será de 2 metros(dobrou a altura na primavera)

// si N = 2, sua altura será de 3 metros(cresceu um metro mais no verão)

// si N = 3, sua altura será de 6 metros(dobrou a altura na primavera seguinte)
// Resoluções
// 1 - Clique na pasta: Lógica.

// 2 - Encontre a questão de acordo com o tópico.