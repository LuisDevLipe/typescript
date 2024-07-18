// Classes abstratas
// Não pode ser Instanciada
// Projetada para ser derivada
// Precisa ter pelo menos um metodo abstrato

// Uma classe abstrata só pode ser instanciada por uma herança e precisa usar metodos abstratos.
abstract class Funcionario {
  constructor(
    private nome: string,
    private sobrenome: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  abstract retornarSalario(): number;
  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} - Salario: ${this.retornarSalario()}`;
  }
}

// const funcionario = new Funcionario("Luis","Felipe") erro
//
class FuncionarioCLT extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private salario: number,
  ) {
    super(nome, sobrenome);
    this.salario = salario;
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private valorHora: number,
    private horasTrabalhadas: number,
  ) {
    super(nome, sobrenome);
  }
  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const luis = new FuncionarioCLT("Luis", "Felipe", 18000);
const joao = new FuncionarioPJ("João", "Sulva", 150, 160);

console.log(luis.emitirContraCheque());
console.log(joao.emitirContraCheque());
