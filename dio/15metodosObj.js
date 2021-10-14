// Métodos são atrelados ao objeto, que podem ter uma função
// A partir do momento de invocação a função se torna um método.
// A propriedade do objeto aniversario se torna uma função, pegar idade com op ternario e somar +1. Passando um método de propriedade para o objeto e add +1. Chamar esse método add +1 , no exemplo chamo 2x.

var pessoa = {
    idade: 17,
    nome: 'Julio',
    sobreNome: 'Moreira',
    altura: 1.80,
    casado: false,
    aniversario: function () {
        pessoa.idade++;
    },
    nomeComSobreNome: function () {
        pessoa.nome = `${pessoa.nome} ${pessoa.sobreNome}`    // * ou
        // return (this.nome = this.nome + ' ' + this.sobreNome )
    }
};
pessoa.aniversario();                       // chamada fç
pessoa.aniversario();
console.log(pessoa.idade);

pessoa.nomeComSobreNome();   //sobrescrevendo a prop nome, ficando Julio Moreira
console.log(pessoa);


// *
//  em vez de template string posso concatenar tambem ou return
//  pessoa.nome = pessoa.nome + ' ' + pessoa.sobreNome
//  return (this.nome = this.nome + ' ' + this.sobreNome )