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
    return idade >= 60 && sexo == "F" && anosContribuicao >= 30
        || idade >= 65 && sexo == "M" && anosContribuicao >= 30;
}

console.log(podeSeAposentar(62, "F", 34));            // Atentar o mínimo para se aposentar difere M e F

console.log('_______________');


// 8 - Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.
function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
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

console.log('_______________');

// Laços
// 1 - Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.
function imprimirAzul4() {
    for (var i = 0; i < 4; i++) {
        console.log("Azul");
    };
};
imprimirAzul4();                                // execução da fc

console.log('_______________');
// 2 - Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.
function imprimir5vezes5() {
    for (var i = 0; i < 5; i++) {
        console.log(5);
    };
};
imprimir5vezes5();

console.log('_______________');
// 3 - Escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i.
function passoAPasso() {
    for (var i = 0; i <= 4; i++) {
        console.log(i);
    };
};
passoAPasso();
console.log('_______________');
// 4 - Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.
function passandoPelosPares() {
    for (var i = 0; i <= 6; i++) {
        if (i % 2 == 0) {
            console.log("aqui eu tenho o valor de " + i);
        }
    };
};
passandoPelosPares();
console.log('_______________');

// 5 - Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.

var totalMoedas = 0;                                  // Começo com 0 moedas
function somar5MoedasDe25Centavos() {
    for (var i = 0; i < 5; i++) {
        totalMoedas = totalMoedas + 0.25;             // valor de 25 cents
    };
    return totalMoedas;
};
console.log(somar5MoedasDe25Centavos());

console.log('_______________');

// 6 - Escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.

function somarMoedasDe25(quantidadeDeMoedas) {
    var totalMoedas = 0;
    for (var i = 0; i < quantidadeDeMoedas; i++) {                        // Até que valor irei percorrer
        totalMoedas = totalMoedas + 0.25;
    };
    return totalMoedas;
};
console.log(somarMoedasDe25(1));
console.log(somarMoedasDe25(10));


console.log('_______________');
// 7 - Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0.

function somaDosPares(x) {
    var somaTotal = 0;
    for (var i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            somaTotal = somaTotal + i;
        }
    };
    return somaTotal
};
console.log(somaDosPares(10));

console.log('_______________');
// 8 - Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele.
function somatoria(numeroX) {
    var somaTudo = 0;
    for (var i = 0; i < numeroX; i++) {
        somaTudo = somaTudo + i;
    }
    return somaTudo;
}
console.log(somatoria(4));
console.log(somatoria(5));

console.log('_______________');
// 9 - Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.
function caloriasDeTrote(numeroVoltas) {
    var totalCalorias = 0;
    var calorias = 5;
    for (var i = 0; i <= numeroVoltas; i++) {
        totalCalorias = totalCalorias + (calorias * i);
    };
    return totalCalorias;
};
console.log(caloriasDeTrote(2));

console.log('_______________');

