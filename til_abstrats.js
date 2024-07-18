// Classes abstratas
// Não pode ser Instanciada
// Projetada para ser derivada
// Precisa ter pelo menos um metodo abstrato
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Uma classe abstrata só pode ser instanciada por uma herança e precisa usar metodos abstratos.
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Object.defineProperty(Funcionario.prototype, "retornarNomeCompleto", {
        get: function () {
            return "".concat(this.nome, " ").concat(this.sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.emitirContraCheque = function () {
        return "".concat(this.retornarNomeCompleto, " - Salario: ").concat(this.retornarSalario());
    };
    return Funcionario;
}());
// const funcionario = new Funcionario("Luis","Felipe") erro
//
var FuncionarioCLT = /** @class */ (function (_super) {
    __extends(FuncionarioCLT, _super);
    function FuncionarioCLT(nome, sobrenome, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.salario = salario;
        _this.salario = salario;
        return _this;
    }
    FuncionarioCLT.prototype.retornarSalario = function () {
        return this.salario;
    };
    return FuncionarioCLT;
}(Funcionario));
var FuncionarioPJ = /** @class */ (function (_super) {
    __extends(FuncionarioPJ, _super);
    function FuncionarioPJ(nome, sobrenome, valorHora, horasTrabalhadas) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.valorHora = valorHora;
        _this.horasTrabalhadas = horasTrabalhadas;
        return _this;
    }
    FuncionarioPJ.prototype.retornarSalario = function () {
        return this.valorHora * this.horasTrabalhadas;
    };
    return FuncionarioPJ;
}(Funcionario));
var luis = new FuncionarioCLT("Luis", "Felipe", 18000);
var joao = new FuncionarioPJ("João", "Sulva", 150, 160);
console.log(luis.emitirContraCheque());
console.log(joao.emitirContraCheque());
