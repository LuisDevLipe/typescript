class Animal_ex {
  mover(distancia = 0) {
    console.log(`Animal se moveu ...: ${distancia} metros.`);
  }
}

class Cachorro_ex extends Animal_ex {
  latir() {
    console.log("Au au!");
  }
}

let cachorro = new Cachorro_ex();
// cachorro.latir();
// cachorro.mover(100);
// cachorro.latir();

// Exemplo 01

class Animal {
  mover(distancia = 0) {
    console.log(`Animal se moveu...: ${distancia} metros.`);
  }
}

class Cachorro extends Animal {
  latir() {
    console.log("Au! Au!");
  }
}

cachorro = new Cachorro();

// cachorro.latir();
// cachorro.mover(10);
// cachorro.latir();

// Exemplo 02

// Propriedades privadas.

class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(): string {
    return `Meu nome é ${this.nome} ${this.sobrenome}.`;
  }
}

class Funcionario extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    private cargo: string,
  ) {
    super(nome, sobrenome);
  }
  retornarNome_02(): string {
    return super.apresentarPessoa() + `E, sou ${this.cargo}`;
  }
}

const funcionario = new Funcionario("Luis", "Felipe", "Operador");
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());
