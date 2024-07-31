// Restringir o tipo de uma variável
// type of
// instanceof
// in

import { ExitStatus } from "typescript";

// Exemplo 1 type guards : typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
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
class Carro {
	marca: string;
	nome: string;

	constructor(marca: string, nome: string) {
		this.marca = marca;
		this.nome = nome;
	}
}

class Moto {
	nome: string;
	ano: number;
	constructor(nome: string, ano: number) {
		this.nome = nome;
		this.ano = ano;
	}
}

function detalhesVeiculo(veiculo: Carro | Moto) {
	if (veiculo instanceof Carro) {
		return ` O nome do carro e: ${veiculo.nome} e a marca e: ${veiculo.marca}`;
	} else if (veiculo instanceof Moto) {
		return ` O nome da moto e: ${veiculo.nome} e o ano e: ${veiculo.ano}`;
	}
}

const carro = new Carro("GOl", "Wolkswagen");
const moto = new Moto("Kawasaki", 2020);
console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));

const formatoData = (valor: Date | string) => {
	if (valor instanceof Date) {
		return valor.toLocaleDateString("pt-br");
	}
	return new Date(valor).toUTCString();
};

console.log(formatoData(new Date("2024-07-07")));

console.log(formatoData("2024-01-01"));



// Exemplo 03 - Type Guards: in

interface Animal {
	grupo:string
}

class Peixe implements Animal {
	grupo: string;
	corPeixe:string

	constructor(grupo:string, corPeixe:string) {
		this.grupo = grupo
		this.corPeixe = corPeixe
	}
}

class Passaro implements Animal {
	grupo: string;
	corPena:string
	constructor(grupo:string,corPena:string){
		this.grupo = grupo
		this.corPena = corPena
	}
}


function nadar (grupo:string) {
	console.log(`O ${grupo} esta nadando`)
}

function voar(grupo:string){
	console.log(`O ${grupo} esta voando`)
}

function mover(animal:Animal) {
	if(`corPeixe` in animal){
		nadar((animal as Peixe).grupo)
	} else if('corPena' in animal) {
		voar((animal as Passaro).grupo)
	}
}

mover(new Peixe('Peixe',"azul"))
mover(new Passaro('Passaro',"vermelho"))
