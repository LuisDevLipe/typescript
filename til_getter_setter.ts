class Quadrado {
	private _largura: number = 6
	private _altura: number = 12

	get calcularQuadrado(): number {
		return this._largura * this._altura
	}
}

console.log(new Quadrado().calcularQuadrado) // não precisa de parenteses no metodo get

class Pessoa {
	nome: string

	constructor() {
		this.nome = ""
	}
	retornarNome(setNome: string): void {
		this.nome = setNome
	}
}

const pessoa = new Pessoa()

pessoa.retornarNome("Luis")
console.log(pessoa.nome)

// Exemplo 01 Get

class Quadrado_02 {
	private _largura = 6
	private _altura = 12

	get calcularQuadrado() {
		return this._altura * this._largura
	}
}

console.log(new Quadrado_02().calcularQuadrado)

// Exemplo 02 Set

// class Pessoa_02 {
// 	nome: string
// 	retornarNome(setNome: string) {
// 		this.nome = setNome
// 	}
// }

// const pessoa2 = new Pessoa()
// pessoa2.retornarNome('Luis')

// class Estudante {
// 	private nome: "Luis Felipe"
// 	private _semestre: "number"
// 	private _curso: string

// 	public get nomeEstudante() {
// 		return this.nome
// 	}
// }

// const estudante = new Estudante()
// const resultado = estudante.nomeEstudante
// console.log(resultado)


// Exemplo 03 set/get

class Estudante_01 {
    nome:string
    semestre:number
    curso:string

    /**
     *
     */
    constructor(nomeEstudante:string,semestre:number,curso:string) {
        this.nome  = nomeEstudante
        this.semestre = semestre
        this.curso = curso
    }

    public get cursos() {
        return this.curso
    }

    public set cursos(setCurso:string){
        this.curso = setCurso
    }
}

const estudante_01 = new Estudante_01("Luis Felipe",2,"ADS")
console.log(estudante_01)

// chamando setter
estudante_01.cursos("CC")