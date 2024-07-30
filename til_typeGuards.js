"use strict";
// Restringir o tipo de uma variável
// type of
// instanceof
// in
Object.defineProperty(exports, "__esModule", { value: true });
function exibirTipo(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Argumentos invalidos....");
}
console.log(exibirTipo("luis", "2"));
console.log(exibirTipo(3, 2));
// console.log(exibirTipo("felipe", 5));
// Exemplo 2 type guads: instanceof
var Carro = /** @class */ (function () {
    function Carro(marca, nome) {
        this.marca = marca;
        this.nome = nome;
    }
    return Carro;
}());
var Moto = /** @class */ (function () {
    function Moto(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    return Moto;
}());
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return " O nome do carro e: ".concat(veiculo.nome, " e a marca e: ").concat(veiculo.marca);
    }
    else if (veiculo instanceof Moto) {
        return " O nome da moto e: ".concat(veiculo.nome, " e o ano e: ").concat(veiculo.ano);
    }
}
var carro = new Carro("GOl", "Wolkswagen");
var moto = new Moto("Kawasaki", 2020);
console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));
var formatoData = function (valor) {
    if (valor instanceof Date) {
        return valor.toLocaleDateString("pt-br");
    }
    return new Date(valor).toUTCString();
};
console.log(formatoData(new Date("2024-07-07")));
console.log(formatoData("2024-01-01"));
var dizerAlgo = function (som) {
    if ("falar" in som) {
        return som.falar();
    }
    else {
        return som.voz();
    }
};
