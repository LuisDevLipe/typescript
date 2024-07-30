interface Animal {
	nome: string
	idade: string
	porte: string
}


interface Cachorro extends Animal {
	raca: string
}

const cachorro: Cachorro = {
	nome: "Branco",
	idade: "2",
	porte: "Grande",
	raca: "Poodle",
}

console.log(cachorro)

interface Funcionario {
    id:number
    nome:string
    salario:string

}

 // Exemplo usando Utility Types = Omit 

interface Desenvolvedor extends Omit<Funcionario, "id" | "salario" > {
    id:string
    salario:string | number
    linguagemProgramacao:string[]
}

const desenvolvedor: Desenvolvedor = {
    id:"typescript-learner",
    nome:"Luis Felipe",
    salario:3400,
    linguagemProgramacao:["TypeScript", "JavaScript"]
}

console.log(desenvolvedor)