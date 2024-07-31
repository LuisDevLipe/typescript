export {};

//  O que é o mapped types ?
// Obter um modelo existente
// Transformar cada propriedas num novo tipo
// Permanecer sincronzado com outro tipo

// sintaxe
//  type MappedTypeName = {k in UnionType : ExistingType}

function intro() {
	interface Pessoa {
		nome: string;
		idade: number;
		email: string;
	}
	type PessoaOpcional = {
		[P in keyof Pessoa]?: Pessoa[P];
	};

	const pessoa: Pessoa = {
		nome: "Joao",
		idade: 25,
		email: "joao@gmail.com",
	};

	const pessoaOpcional: PessoaOpcional = {
		nome: "Joao de tal",
	};
	console.log(pessoa);
	console.log(pessoaOpcional);
}
intro();

// Exemplo 01 : Mapped Types

type Usuario = {
	nome: string;
	endereco: string;
	telefone: string;
	idade: number;
	apelido: string;
};

type FuncionarioOpcional = {
	nome?: string;
	endereco?: string;
	telefone?: string;
	idade?: number;
	apelido?: string;
};

type UsuarioSomenteLeitura = {
	readonly nome: string;
	readonly endereco: string;
	readonly telefone: string;
	readonly idade: number;
	readonly apelido: string;
};

type FuncionarioMapped = {
	[K in keyof Usuario]?: Usuario[K];
};
type UsuarioMappedType = {
	[P in keyof Usuario]?: Usuario[P];
};

const usuarioMapped: UsuarioMappedType = {
	nome: "Luis",
	idade: 26,
};

console.log(usuarioMapped);

// ==> Exemplo 02 : Outros Tipos Avançados

interface Livro {
	titulo: string;
	autor: string | null;
	preco: number;
	numeroPaginas: number;
}

type Artigo = Omit<Livro, "numeroPaginas">;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
	autor: "Boris Cherny",
	numeroPaginas: 324,
	preco: 19.99,
	titulo: "Programming Typescript: Making Your JavaScript Applications Scale",
};

console.log(livro);

// livro.preco = 24.99; erro o type é readonly
