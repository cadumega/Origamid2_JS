//Toda string possui as propriedades e métodos do prototype de String

// Utilizando o forEach na array abaixo,
// some os valores de 'Taxa' e os valores de Recebimento


//Json forma de organizar dados q se parece com objeto, geralmente vc tera uma array com objetos dentro. Iremos manipular cada item dela.
const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Taxa Cliente',
      valor: 'R$ 49',
    },
  ];

//DOM acesso aos valores das propriedades do obj transacoes[0].descricao   transacoes[0].valor 
//sempre q falo cada item da array, é forEach


//somar valores na variavel     // console.log(item.descricao.includes('Taxa'));       //obs: pode ter taxa no meio do texto e irá acusar como true.
    // console.log(+numeroLimpo);   * + na frente de uma string transforma em number
// valores estao como strings com R$, precisamos remover 

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')

    if(item.descricao.slice(0,4) === 'Taxa') {
        taxaTotal = taxaTotal + numeroLimpo
    } else {
        recebimentoTotal = recebimentoTotal + numeroLimpo
  }
})

  console.log(taxaTotal);
  console.log(recebimentoTotal);

// Extraio os dados de string para obj e numbers. Para melhor manipulação


// 2) Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes);


// 3)Substitua todos os span's por a's, coloque em minusculo os valores da lista
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

//pegar a string e dividir em arrays // se ligar no valor que esta passando
html = html.split('span').join('a').toLowerCase()
console.log(html);

// 4)Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1));


//5) Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

// esta bem sujo ao passar os valores,preciso limpar espaços e padronizar texto tax

let taxasTotal = 0;

transacoes2.forEach((item)=> {
    item = item.toLowerCase().trim().slice(0,4);

        if(item === 'taxa')
            taxasTotal++  //incremento, somando os textos de taxas

})

console.log(taxasTotal);
