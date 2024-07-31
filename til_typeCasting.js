"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var valor = "Ola, Pessoal";
// sintaxe value as type || <type>value
// console.log(valor.length); erro
console.log(valor.length);
// ou
console.log(valor.length);
// ===> Exemplo 01 - Type Casting : 'as'
var nome = "Luis Felipe";
console.log(nome.toLocaleLowerCase());
// tipo inferido pelo ts
// console.log(nome.toLowerCase(), typeof nome); erro
// Exemplo 02 - Type Casting: '<>'
var carro = "Corolla";
var tamanhoString = function () { return carro.length; };
