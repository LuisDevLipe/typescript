var Quadrado = /** @class */ (function () {
    function Quadrado() {
        this._largura = 6;
        this._altura = 12;
    }
    Object.defineProperty(Quadrado.prototype, "calcularQuadrado", {
        get: function () {
            return this._largura * this._altura;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrado;
}());
console.log(new Quadrado().calcularQuadrado); // não precisa de parenteses no metodo get
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = "";
    }
    Pessoa.prototype.retornarNome = function (setNome) {
        this.nome = setNome;
    };
    return Pessoa;
}());
var pessoa = new Pessoa();
pessoa.retornarNome("Luis");
console.log(pessoa.nome);
// Exemplo 01 Get
var Quadrado_02 = /** @class */ (function () {
    function Quadrado_02() {
        this._largura = 6;
        this._altura = 12;
    }
    Object.defineProperty(Quadrado_02.prototype, "calcularQuadrado", {
        get: function () {
            return this._altura * this._largura;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrado_02;
}());
console.log(new Quadrado_02().calcularQuadrado);
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
var Estudante_01 = /** @class */ (function () {
    /**
     *
     */
    function Estudante_01(nomeEstudante, semestre, curso) {
        this.nome = nomeEstudante;
        this.semestre = semestre;
        this.curso = curso;
    }
    Object.defineProperty(Estudante_01.prototype, "cursos", {
        get: function () {
            return this.curso;
        },
        set: function (setCurso) {
            this.curso = setCurso;
        },
        enumerable: false,
        configurable: true
    });
    return Estudante_01;
}());
var estudante_01 = new Estudante_01("Luis Felipe", 2, "ADS");
console.log(estudante_01);
// chamando setter
estudante_01.cursos("CC");
