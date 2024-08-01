export {};

// O que é Generics ?
// Reutilizável e generalizada as fumções, classes interfaces.
// Variedade de tipos de dados
// Consummam esses componentes e seus próprios tipos
// Flexível e escalável a longo prazo.

function intro() {
	function retornarNumerosRandomicos(items: number[]): number {
		let numeroRandomico = Math.floor(Math.random() * items.length);
		return items[numeroRandomico];
	}
	function retornarElementosRandomicos(items: string[]): string {
		let itemRandomico = Math.floor(Math.random() * items.length);
		return items[itemRandomico];
	}
	let paises = ["Brasil", "EUA", "Japão", "China", "Canadá"];
	let numeros = [1, 4, 7, 3, 5];
	console.log(retornarNumerosRandomicos(numeros));
	console.log(retornarElementosRandomicos(paises));

	// Utilizando o Generic Type evita fugir do padrão dry ==>

	function retornarElementosRandomicos_generics<T>(items: T[]): T {
		let itemRandomico = Math.floor(Math.random() * items.length);
		return items[itemRandomico];
	}
	console.log(retornarElementosRandomicos_generics<string>(paises));
	console.log(retornarElementosRandomicos_generics<number>(numeros));
}

// Exemplo 01 - Generics Type :
function retornarElementosRandomicos<GenericType>(items: GenericType[]): GenericType {
	let itemRandomico = Math.floor(Math.random() * items.length);
	return items[itemRandomico];
}

let numeros = [5, 15, 25];
let numerosRandommicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandommicos);

let estados: string[] = [
	"Acre",
	"Alagoas",
	"Amapá",
	"Amazonas",
	"Bahia",
	"Ceará",
	"Distrito Federal",
	"Espírito Santo",
	"Goiás",
	"Maranhão",
];
let estadosRandomicos = retornarElementosRandomicos<string>(estados);
console.log(estadosRandomicos);

// Exemplo 02 - Generics Type
function exibirElementos<T>(array: T[]): void {
	array.forEach((elemento) => {
		console.log(elemento);
	});
}
let number: number[] = [1, 2, 3, 4, 5];
exibirElementos<number>(number);

let states: string[] = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia"];
exibirElementos<string>(states);