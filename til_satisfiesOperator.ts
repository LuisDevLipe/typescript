// Satisfies Operator
// Capacidade de atribuir tipo mais espeficos

import { create } from "ts-node";

// impor uma restricao numa variavel sem tipo
export {};
function intro() {
	type Cidade = NomeCidade | CidadeCoordenadas;
	type NomeCidade = "Rio de Janeiro" | "São Paulo" | "Salvador" | "Belo Horizonte";
	type CidadeCoordenadas = {
		x: number;
		y: number;
	};

	type Pessoa = {
		localNascimento: Cidade;
		residenciaAtual: Cidade;
	};

	const pessoa = {
		localNascimento: "Rio de Janeiro",
		residenciaAtual: { x: 9, y: 10 },
	} satisfies Pessoa;
	console.log(pessoa.localNascimento.toUpperCase());
}

intro();

//  Exemplo 01 - Satisfies Operator

type Cidade = NomeCidade | CidadeCoordenadas;
type NomeCidade = "Rio de Janeiro" | "São Paulo" | "Salvador" | "Belo Horizonte";
type CidadeCoordenadas = {
	x: number;
	y: number;
};

type Pessoa = {
	localNascimento: Cidade;
	residenciaAtual: Cidade;
};

const pessoa = {
	localNascimento: "Rio de Janeiro",
	residenciaAtual: { x: 9, y: 10 },
} satisfies Pessoa;
console.log(pessoa.localNascimento.toLowerCase());

// ==> Exemplo 02 - Satisfies Operator

type Connection = {};

declare function createConnection(host: string, port: string, reconnect: boolean, poolsize: number): Connection;

type Configuration = {
	host: string;
	port: string | number;
	tryReconnect: boolean | (() => boolean);
	poolSize?: number;
};

const config: Configuration = {
	host: "localhost",
	port: 3301,
	tryReconnect: () => true,
};

function connect() {
	let { host, port, tryReconnect, poolSize } = config;
	if (typeof port === "number") port = `${port}`;

	if (typeof tryReconnect !== "boolean") tryReconnect = tryReconnect();

	if (!poolSize) poolSize = 10;
}

// Refatorando com o uso do operador satisfies
const config_refactor = {
	host: "localhost",
	port: 3301,
	tryReconnect: () => true,
	// pool:10
} satisfies Configuration;
function connect_refactor() {
	let { host, port, tryReconnect } = config_refactor;
	createConnection(host, `${port}`, tryReconnect(), 10);
}
