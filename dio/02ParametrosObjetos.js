function findMax() {
    let max = -Infinity
}
for(let i=0; i < arguments.length; i++) {
    if (arguments[i] >max) {
        max = arguments [i];
    }
}
return max;

findMax(1,2,3,6,90,1)   //90 // Uma array com todos os parametros passados qd a fç foi invocada


// Spread
function sum(x,y,z) {
    return x + y + z
}

const numbers = [1,2,3];
console.log(sum(...numbers));   // O que era parte de um array se torna um elemento independente

// Rest
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho()  // 0
confereTamanho(1,2) //2
confereTamanho(3,4,5) // 3

//Rest chama qd vc esta declarando a fc, o que era um elemento independente se torna parte de uma array.


// Object Destructuring - desestruturacao de obj , entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto, q iremos usar.
const user = {
    id:42,
    displayName: 'Joao',
    fullName: {
        firstName: 'John',
        lastName:'Doe'
    }
};

function userId ({id}) {       //fc ira procurar um argumento de id
    return id;
}

//fiz uma equivalencia ao colocar dois pontos que irá ter outro nome. O argumento firstName seja equivalente a minha variavel first.
function getFullName ({fullName: {firstName: first, lastName:last}}) {
    return `${first} ${last}`
}

userId(user) // 42

getFullName(user ) // John Doe