var Functionario = /** @class */ (function () {
    function Functionario(cargo) {
        this.cargo = cargo;
    }
    return Functionario;
}());
var funcionario = new Functionario("Programador");
// funcionario.cargo = "CEO" erro
var Funcionario_01 = /** @class */ (function () {
    function Funcionario_01(cargo) {
        this.cargo = cargo;
        this.cargo = cargo;
    }
    return Funcionario_01;
}());
var Funcionario_02 = /** @class */ (function () {
    /**
     *
     */
    function Funcionario_02(nome, codigo) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
    return Funcionario_02;
}());
var func = new Funcionario_02("Luis", 24);
// func.codigoFuncionario = 321 erro
func.nome = "Macedo"; // sucesso
var Funcionario_03 = {
    codigoFuncionario: 24,
    nomeEmpregado: "Luis"
};
// Funcionario_03.codigoFuncionario = 123 // erro 
// Funcionario_03.nome = "luis" erro
