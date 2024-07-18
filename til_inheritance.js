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
var Animal_ex = /** @class */ (function () {
    function Animal_ex() {
    }
    Animal_ex.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("Animal se moveu ...: ".concat(distancia, " metros."));
    };
    return Animal_ex;
}());
var Cachorro_ex = /** @class */ (function (_super) {
    __extends(Cachorro_ex, _super);
    function Cachorro_ex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro_ex.prototype.latir = function () {
        console.log("Au au!");
    };
    return Cachorro_ex;
}(Animal_ex));
var cachorro = new Cachorro_ex();
// cachorro.latir();
// cachorro.mover(100);
// cachorro.latir();
// Exemplo 01
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("Animal se moveu...: ".concat(distancia, " metros."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("Au! Au!");
    };
    return Cachorro;
}(Animal));
cachorro = new Cachorro();
// cachorro.latir();
// cachorro.mover(10);
// cachorro.latir();
// Exemplo 02
// Propriedades privadas.
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.retornarNomeCompleto = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome);
    };
    Pessoa.prototype.apresentarPessoa = function () {
        return "Meu nome \u00E9 ".concat(this.nome, " ").concat(this.sobrenome, ".");
    };
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, cargo) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.cargo = cargo;
        return _this;
    }
    Funcionario.prototype.retornarNome_02 = function () {
        return _super.prototype.apresentarPessoa.call(this) + "E, sou ".concat(this.cargo);
    };
    return Funcionario;
}(Pessoa));
var funcionario = new Funcionario("Luis", "Felipe", "Operador");
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());
