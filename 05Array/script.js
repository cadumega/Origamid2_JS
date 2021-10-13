// Arrays armazenam elementos
// O que retorna é o que importa
// Espaços vazios deixam mais lentas

const carros = new Array('Ford','Fiat','Honda');

const obj = {
    0:'Carlos',
    1:'Eduardo',
    2:'Teste',
}

const objArray = Array.from(obj);
console.log(obj);
//Como a fç contrutora de obj. retorna uma array