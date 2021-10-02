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

console.log(Pessoa.prototype);     // retorna o obj
console.log(andre.prototype);      // undefined
