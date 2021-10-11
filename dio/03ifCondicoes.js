// Armazenar condicoes em variaveis

function numeroPositivo(num) {
    let resultado;
}

const ehNegativo = num < 0;

if (ehNegativo) {
    resultado = false
} else {
    resultado = trues
}

return resultado;


// return para a fç e joga no console
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }

    return true;
}

//Aninhar if

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse numero é negativo!"
    } else if (!ehNegativo && maiorQueDez) {                    // nova verificacao
        return "Esse numero é positivo e maior que 10!"
    }
    return "Esse numero é positivo!"
}

numeroPositivo(2) // Esse numero é positivo!
numeroPositivo(-2)  // Ese numero énegativo!
numeroPositivo(40) // Esse numero épositivo e maior que 10

//JS nao tem elseif, as palavras sáo separadas.

