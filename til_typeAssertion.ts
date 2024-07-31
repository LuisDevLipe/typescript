// O que é o Type Assertion

// É uma tecnica que informa o compilador o tipo da variavel sem reconstruir a variavel

// Semelhante ao Type Casting

// Diferença: Type Assertion vs Type Casting
//  A razão pela qual não é chamado de "type Casting"
// é que a conversão geralmente implica em algum tipo de suporte de tempo de execução.
// No entanto, em type assertions são puramente uma construção de tempo de compilação e uma maneira de fornecer dicas
// ao compilador sobre como você deseja que seu código seja analisado.

export {};
function intro() {
	type Humano = {
		nome: string | unknown;
		idade: number;
		idioma: string;
	};

	const humano = {
		// nome: "Luis",
		idade: 36,
		idioma: "Portugues",
	};

	const humano2 = humano as Humano;

	// console.log(humano2.nome.toUpperCase());
	//  Erro Ele permite executar o codigo mesmo esse codigo gerando uma excecao
}

// Exemplo 01 - Type Assertions

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
	const precoComDesconto = preco * (1 - desconto);
	return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal2 = <number>exibirPrecoFinal(200, 0.15, false);

console.log(descontoFinal);
console.log(descontoFinal2);

// Exemplo 02 - Type Assertion

type Humano = {
	nome: string;
	idade: number;
	idioma: "string";
};

const humano = {
	idade: 36,
	idioma: "Portugues",
};
const humano02 = humano as Humano;
// console.log(humano02.nome.toUpperCase()); erro

// Aqui eu disse para o typescript que humano02 deveria ser interpreado como se fosse do tipo Humano.
// Isso é um tipo de assertção que eu posso fazer, mas não é uma garantia de que o humano02 realmente e do tipo Humano

// consertando
const humano03: Humano = humano;
console.log(console.log(humano03.nome.toUpperCase()));
//  Aqui acima o typescript consegue em tempo de execução informar o erro, a falta da proprieda nome no objeto humano03.
