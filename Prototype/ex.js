// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const carlos = new Pessoa('Carlos', 'Lopes', 30)

//DOM carlos.nomeCompleto() 


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//__proto__ é um node - cadeia de herança
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement          DOM    li.constructor.name   
li.click; // Function                 li.click.constructor.name 
li.innerText; // String              li.innerText.toUpperCase
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String       retorna a string de boolean, q é somente texto
