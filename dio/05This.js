// This é uma palavra reservada para o contexto que esta, refere-se ao objeto , no ex abaixo objeto pessoa.


const pessoa = {
    firstName: "Andre",
    lastName: "Soares",
    id: 1,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getId: function () {
        return this.id;
    }
};

pessoa.fullName(); // Andre Soares
pessoa.getId()     // 1

/*
// Contexto                            // Referencia
Em um meuObjeto(método)                Proprio objeto dono do método
Sozinha                                Objeto global(em navegadores,window)
Função                                 Objeto global
Evento                                 Elemento que recebeu o evento
*/

// Call - chamada para variaveis e argumentos
const pessoa2 = {
    nome : "Miguel"
}

const animal = {
    nome: "Murph"
}

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa2);          // Miguel ,


// Passando a chamada para argumentos
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1,5);  //12

//Apply - parecida com a call, a diferenca é possivel passar paramtros para a fc dentro de um array.
const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Godi"
};

function getSomething(){
    console.log(this.nome);
}
getSomething.apply(animal)  //Godi

// Bind cloca a estrutura da fç onde échamada e aplica o valor do objeto passado como parâmetro
const retornaNomes = function () {
    return this.nome;
};
let bruno = retornaNomes.bind({nome: "Bruno"});
bruno(); // Bruno

// bruno é como se fosse function () {return this.nome} só que em nome esta declarada como value Bruno