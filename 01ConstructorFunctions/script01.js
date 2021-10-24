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


// this faz ref ao proprio objeto construído com a Constructor Function

function Carro(marcaAtribuida,precoAtribuido) {
    this.marca = marcaAtribuida; 
    this.preco = precoAtribuido;
}

const honda = Carro('Honda');


function Carro2(marca,precoInicial) {
    const taxa =1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    console.log(this)
    this.preco = precoFinal;
    console.log(this)
}

const mazda = new Carro2(`Mazda`, 5000)