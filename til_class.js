"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.showName = function () {
        return this.name;
    };
    Pessoa.prototype.showAge = function () {
        return this.age;
    };
    Pessoa.prototype.showPerson = function () {
        return "Person ".concat(this.name, " has ").concat(this.age, " years");
    };
    return Pessoa;
}());
var luisfelipe = new Pessoa("Luis Felipe", 26);
console.log(luisfelipe.showName(), luisfelipe.showAge(), luisfelipe.showPerson());
var dog = {
    name: "Bia",
    family: "Canines",
    cuteness: 10,
};
console.log(dog);
var Computer = /** @class */ (function () {
    function Computer(_brand, _model, _price) {
        // super();
        this.brand = _brand;
        this.model = _model;
        this.price = _price;
    }
    return Computer;
}());
var myPc = new Computer("OEM", "oldAf", 6001);
console.log(myPc.brand, myPc.model, myPc.price);
function conectUser(user) {
    if (user.name === "luisfelipe" && user.password === "1234") {
        return true;
    }
    else {
        return false;
    }
}
var newUser = {
    name: "luisfelipe",
    password: "1234",
};
var fakeUser = {
    name: "luisfelipe",
    password: "12345",
};
console.log(conectUser(newUser));
console.log(conectUser(fakeUser));
function getUserWhoIsGoat() {
    return {
        name: "luisfelipe",
        password: "1234",
    };
}
console.log(getUserWhoIsGoat());
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(25);
