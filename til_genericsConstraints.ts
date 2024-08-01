export {};
// O que é Generics Constraints?
// Permitem trabalhar com todo e qualquer tipo de dados
// Podemos restringir certos tipos usando constraints
// Palavra chave extends

function intro() {
	interface Pessoa {
		nome: string;
		idade: number;
	}
	function obterIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
		return pessoas.filter((pessoa) => pessoa.idade > idade);
	}
	const pessoas: Pessoa[] = [
		{ nome: "João", idade: 30 },
		{ nome: "Maria", idade: 25 },
		{ nome: "Pedro", idade: 15 },
		{ nome: "Ana", idade: 18 },
		{ nome: "Carlos", idade: 24 },
	];
	const pessoasComIdadeMaiorQue25 = obterIdadeMaiorQue(pessoas, 25);
	console.log(pessoasComIdadeMaiorQue25);
}
intro();

// Exemplo 01 - Generics Constraints
