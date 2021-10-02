// A propriedade prototype é um objeto adicioando a uma função quando a mesma é criada.
// Criando fc construtora de Pessoa

//Primeiro ira procurar dentro do objeto, existe o metodo dentro dele? ai depois ira para o prototype.
// Encadeia o __proto__, acessa do objeto criado da function Pessoa - Herança de Protótipo

/*

*/
function Pessoa (nome , idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return "Abraçou"
    }
    this.andar = function() {
        return "Andou pelo objeto"
    }
}

var obj = {
    nome: 'Nadre',
    idade: 33,

}

Pessoa.prototype.andar = function () {
    return this.nome + " Pessoa andou";
}

Pessoa.prototype.nadar = function () {
    return this.nome + " Pessoa nadou";
}


const andre = new Pessoa ('André',28)

// console.log(Pessoa.prototype);     // retorna o obj
// console.log(andre.prototype);      // undefined


//Metodos e propriedades se colocar no DOM   pais.
// Quero fazer tal coisa com js, posso acessar esses metodos de string
const pais = "Brasil";
const cidade = new String ("Rio")

const lista = document.querySelectorAll('li')

// DOM acessar metodos de array no __proto__ tem + q Nodelist de li .    listaAnimais
const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']


//metodo from linkado com construtor fc Array
const listaArray2 = Array.from(lista)

// Object.getOwnPropertyNames(Array)  , quais propriedades atreladas Object.getOwnPropertyNames(Andre)

//Entender o que esta sendo retornado, pois é o que tera acesso de metodos e propriedades diferentes.

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return 'Oi'
    }
}

// DOM Carro.marca.toUpperCase()
// Carro.andar() estou falando com boolean , tem - props e metodos. Ja Carro.andar + opcoes
//DOM Carro.andar éuma fç , Carro.andar() qd ativo é uma string, pois retorna 'oi'