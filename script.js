const carro = {
    marca: `Marca`,
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 2000;

const fiat = carro;
fiat.marca = 'fiat';

fiat.preco = 3000;


//

function Carro(marcaAtribuida,precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = Carro('Honda');
