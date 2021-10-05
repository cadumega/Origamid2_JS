/*
function darOi () {
    console.log('Oi para você');
}

darOi();


// nesse exemplo abaixo, coloquei + 2 argumentos nome e idade
function darOi2 (nome,idade) {
    console.log('Oi para você' + nome + idade);
}

darOi2.call(null, 'Andre',28);


function descricaoCarro(velocidade) {
    console.log(this.marca + ' ' + this.ano + velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100); // fiz a substituicao com obj.
// O primeiro são os objetos , depois os parâmetros

*/

function Dom (seletor) {
    this.element = document.querySelector(seletor);
}

// seleciona o element e add a classe
Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe) 
}

const ul = new Dom('ul')

console.log(ul);