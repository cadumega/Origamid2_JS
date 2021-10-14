var metodos = {
    prop: function name() {
        return 10 + 10
    }
}
console.log(metodos.prop());

//ex2
// Fc se auto executa, nao precisei chamar ela, criando dessa forma a sintaxe
(function() {
    console.log(40 + 40);
}());
