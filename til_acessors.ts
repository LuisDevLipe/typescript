
class Functionario {
    readonly cargo:string


    constructor(cargo:string) {
    this.cargo = cargo
    }
}


const funcionario = new Functionario("Programador")

// funcionario.cargo = "CEO" erro

class Funcionario_01 {

    constructor(readonly cargo:string) {
        this.cargo = cargo   
    }
}

class Funcionario_02 {
    nome:string
    readonly codigoFuncionario:number
    /**
     *
     */
    constructor(nome:string, codigo:number) {
            this.codigoFuncionario = codigo
            this.nome = nome
    }
}

const func = new Funcionario_02("Luis",24)

// func.codigoFuncionario = 321 erro
func.nome = "Macedo" // sucesso

// readonly com interface

interface iFuncionario  {
    codigoFuncionario:number
    nomeEmpregado:string
}

const Funcionario_03:Readonly<iFuncionario> ={
    codigoFuncionario:24,
    nomeEmpregado:"Luis"
}

// Funcionario_03.codigoFuncionario = 123 // erro 

// Funcionario_03.nome = "luis" erro