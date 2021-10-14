//  passar a array como argumento da myFunction 
//  chamada feita dentro do console.log

var arr = [5, 6, 7, 8, 9, 10, 'Julio'];

function myFunction(arg) {
    return arg[6];
}

console.log(myFunction(arr));



//   passar o valor do objeto pra função

var obj = {
    nome: 'Carlos',
    altura: 1.80 ,
    peso: 80,
    idade: 25
}

function myFunctionObj(arg) {
    return arg.nome;
}
console.log(myFunctionObj(obj));     // passar o nome


function myFunctionObj2(arg) {
    return arg;
}

// console.log(myFunctionObj2(obj));   // passar a fc toda
console.log(myFunctionObj2(obj.idade));   // passar o nome