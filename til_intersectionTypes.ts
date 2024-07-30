// Intersection  types
// Combinação de vários tipos existentes
// Possui todas as características do tipo existente
// operador &

interface DadosBancarios {
	conta: number
	agencia: number
	banco: string
}

interface Cliente {
	nome: string
	email: string
}

interface DadosPessoaFisica {
	cpf: number
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica

const cliente: DadosCliente = {
	conta: 1234,
	agencia: 123,
	banco: "Santander",
	nome: "Luis",
	email: "luis@gmail.com",
	cpf: 123456789,
}

console.log(cliente)

export {}
