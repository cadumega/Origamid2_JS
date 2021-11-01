let nome = "João";
let ano = 1990;

function aniversario(nome, ano) {
    return `${nome} nasceu em ${ano}`;
}

console.log(aniversario(nome, ano));

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function resto(a, b) {
    return a % b;
}

function potencia(a, b) {
    return a ** b;
}

function raiz(a) {
    return Math.sqrt(a);
}

function maior(a, b) {
    return Math.max(a, b);
}

function menor(a, b) {
    return Math.min(a, b);
}

function aleatorio(a, b) {
    return Math.random() * (b - a) + a;
}

function aleatorioInteiro(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function falar(a) {
    return a;
}

