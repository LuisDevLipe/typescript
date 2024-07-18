// Verificar regras de negocio com membros estaticos
// Verificar restrição de outra classe
// Implementar Fatcory method
// Abstract factory

// Exemlo_01 : Propriedas Estáticas
//

class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    Funcionario.contratacoes++;
  }
}

const funcionario1 = new Funcionario("Luis Felipe", "Macedo", "Desenvolvedor");
const funcionario2 = new Funcionario("Luis Felipe", "Macedo", "Desenvolvedor");

console.log(Funcionario.contratacoes);

class Funcionario_02 {
  private static contratacoes = 0;
  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    Funcionario_02.contratacoes++;
  }

  public static retornarContratacoes() {
    return Funcionario_02.contratacoes;
  }
}

// Nome da classe seguido do nome do método
const funcionario2_1 = new Funcionario_02(
  "Luis",
  "Felipe",
  "Desenvolvedor Backend",
);
console.log(Funcionario_02.retornarContratacoes());

// Exemplo 03 Propriedades estáticas

type Raca = "Spitz" | "Bulldogue";

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;
  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;
    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }
  public exibirInformacao() {
    console.log(`O Cachorro ${this.nome} tem ${this.idade} anos.`);
  }
}

const cachorro_01 = new Cachorro("Pipoca", 4, ["Spitz"]);
const cachorro_02 = new Cachorro("Farofa", 6, ["Bulldogue"]);
