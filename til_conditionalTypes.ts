export {};

// O que é o Conditional Types ?

// Definem tipos de valor em base nas condições
// Usado para fluxo de codigo
// sintaxe igual ao if ternario

function intro() {
	type DataNascimento = string;
	type Idade = number;

	type InformacaoPessoa<T> = T extends number ? number : string;

	const dataNascimento: InformacaoPessoa<DataNascimento> = "24/10/1986";
	console.log(dataNascimento);

	const idade: InformacaoPessoa<Idade> = 36;
	console.log(idade);
}
intro();

// Exemplo 01 - Conditional Types

type Pessoa = {
	nome: string;
	idade: number;
	endereco: string;
};

type Empresa = {
	nome: string;
	cnpj: number | string;
};

type EnderecoPessoa = {
	enderecoSecundario: string;
	cidade: string;
	pais: string;
};

type EnderecoEmpresa = {
	localizacao: "rua" | "avenida" | "praca";
};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
	enderecoSecundario: "Rua 2",
	cidade: "Sao Paulo",
	pais: "Brasil",
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
	localizacao: "rua",
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// ===> Exemplo 02 - Conditional Types ()

type FormatoArquivos = "png" | "jpg" | "gif" | "svg" | "mp4" | "mp3";

type FiltrarArquivoAudio<Type> = Type extends "mp4" | "mp3" ? Type : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;
// const arquivoAudio: ArquivoAudio = "gif"; erro capturado em tempo de execucao

const arquivoAudio: ArquivoAudio = "mp3";

console.log(arquivoAudio);
