// querySelector 1 item que aparecer no seletor
// Dom.element() 
// add class ativar ao item 1 

// const Dom = {
//     seletor:'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

function Dom (seletor) {
    this.element = function () {
        return document.querySelector(this.seletor);
    } 
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
}


// Quero reaproveitar com as fç construtoras