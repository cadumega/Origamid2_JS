// Não tenho noção exata de quandos os dados vão retornar. Para poder trabalhar com esses dados, a solução antiga era com os callbacks, que será executada quando esse dado estiver pronto. Mas fica uma árvore de função com várias outras funções. As promises solucionam esse problema.

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
};

/*
function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

esperaAi("Frase 1", rand(1,3));                // chamando a fç, 1 seg para aparecer
esperaAi("Frase 2", 1000);
esperaAi("Frase 3", 1000);

// Como colocar na ordem . 
*/

function esperaAi(msg, tempo) {
    return new Promise((resolve , reject) => {   // Chamar o construtor da promise 
        setTimeout(() => {
            resolve(msg);      // Resolvendo a promessa, joga msg dentro do param unico
        }, tempo);
    });
}
esperaAi('Conexão com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);     //pegando o argumento da fc acima, no corpo coloco clog
        return esperaAi('Buscando dados da BASE', rand(1,3))      //retornei uma promisse, encadeado em outra
    }) .then(resposta => {
        console.log(resposta);                 //para exibir a frase 2    
        return esperaAi('Tratando os dados da BASE', rand(1,3));
    }).then(resposta => {
        console.log(resposta);         //para exibir a frase 3
    }).then( () => {
        console.log('Exibe dados na tela');
    });   

    console.log('Frase teste, que será exibido antes de qualquer promisse');
// then sera executado qd a promessa for executado.
// As promisses são em paralelo, irá executar o seu código e jogar as promisses para executar depois. Chamados de código assincrono.
