let x = 10;
let y = 20;

function teste() {
    if (x > 5 && x === 10) {
        console.log('O valor é igual a 5.');
    } else if ( y === 20) {
        console.log('O valor de y é igual a 20.');
    }
}
teste();

// Precisa atender as duas condições serem verdadeira para cair no 1 console log.
// Se for com ou || só uma condição precisa ser verdadeira. 
//  (x > 5 || x === 10)    (x > 5 && x === 10)