function calculaIdade(anos) {
    return `Daqui a ${anos} anos,${this.nome} terá ${this.idade + anos} anos de idade`;
}

//criar objetos
const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade:20
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raça: 'Pug'
};

console.log(calculaIdade.call(pessoa2, 30)); // Daqui a 30 anos, carla terá 56 anos de idade.
console.log(calculaIdade.call(animal, 7)); // Daqui a 7 anos,Fiona terá 12 anos de idade.
console.log(calculaIdade.apply(pessoa1, [4])); // Daqui a 4 anos,Maria terá 34 anos de idade.