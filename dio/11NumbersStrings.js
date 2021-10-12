let salarioDoAmigo = 1000
let meuSalario = '2999'

let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalarioCorrigido);

const heroi = {
    nome:"Flash",
    idade:100,
    sexo: "Masculino",
    poder: "Velocidade"
}

console.log('nome', heroi.nome);
console.log('idade', heroi['idade']);
console.log('sexo', heroi.sexo);
console.log('naoExiste',heroi.naoExiste);

heroi.id = 0001  
console.log(heroi);



// setando valores fora usa o igual, adicionei o id nessa instancia de heroi, estamos passando uma nova chave no objeto.

console.log(Object.keys(heroi));

console.log(Object.values(heroi));

const pessoa = {
    tamanho : ' 10 metros'
}
const novoObj = Object.assign(heroi, pessoa)  
console.log(novoObj);

//fc pre definida com Object.assign para agrupar esses objetos.
// Criar um novo objeto por padrão e não alterar o original que já foi criado por convenção

// remover uma chave de propriedade
delete novoObj.nome
console.log(novoObj);