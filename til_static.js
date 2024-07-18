// Verificar regras de negocio com membros estaticos
// Verificar restrição de outra classe
// Implementar Fatcory method
// Abstract factory
// Exemlo_01 : Propriedas Estáticas
//
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
    Funcionario.contratacoes = 0;
    return Funcionario;
}());
var funcionario1 = new Funcionario("Luis Felipe", "Macedo", "Desenvolvedor");
var funcionario2 = new Funcionario("Luis Felipe", "Macedo", "Desenvolvedor");
console.log(Funcionario.contratacoes);
var Funcionario_02 = /** @class */ (function () {
    function Funcionario_02(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario_02.contratacoes++;
    }
    Funcionario_02.retornarContratacoes = function () {
        return Funcionario_02.contratacoes;
    };
    Funcionario_02.contratacoes = 0;
    return Funcionario_02;
}());
// Nome da classe seguido do nome do método
var funcionario2_1 = new Funcionario_02("Luis", "Felipe", "Desenvolvedor Backend");
console.log(Funcionario_02.retornarContratacoes());
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    Cachorro.prototype.exibirInformacao = function () {
        console.log("O Cachorro ".concat(this.nome, " tem ").concat(this.idade, " anos."));
    };
    Cachorro.QTD_CACHORRO_VENDIDO = 0;
    return Cachorro;
}());
var cachorro_01 = new Cachorro("Pipoca", 4, ["Spitz"]);
var cachorro_02 = new Cachorro("Farofa", 6, ["Bulldogue"]);
