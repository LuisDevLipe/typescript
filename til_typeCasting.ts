export {};

const valor: unknown = "Ola, Pessoal";

// sintaxe value as type || <type>value

// console.log(valor.length); erro
console.log((valor as string).length);
// ou
console.log((<string>valor).length);

// ===> Exemplo 01 - Type Casting : 'as'

const nome: unknown = "Luis Felipe";
console.log((nome as string).toLocaleLowerCase());
// tipo inferido pelo ts
// console.log(nome.toLowerCase(), typeof nome); erro

// Exemplo 02 - Type Casting: '<>'
const carro = "Corolla";

const tamanhoString: number = (<string>carro).length;
console.log("O tamanho da string eh...: " + tamanhoString);
