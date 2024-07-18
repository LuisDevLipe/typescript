import { get } from "http"

class Pessoa {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	showName(): string {
		return this.name
	}
	showAge(): number {
		return this.age
	}

	showPerson(): string {
		return `Person ${this.name} has ${this.age} years`
	}
}

const luisfelipe = new Pessoa("Luis Felipe", 26)

console.log(luisfelipe.showName(), luisfelipe.showAge(), luisfelipe.showPerson())
interface IAnimal {
	name: string
	family: string
	cuteness: number
}

const dog: IAnimal = {
	name: "Bia",
	family: "Canines",
	cuteness: 10,
}

console.log(dog)

interface IComputer {
	brand: string
	model: string
	price: number
}

class Computer {
	brand: string
	model: string
	price: number

	constructor(_brand: string, _model: string, _price: number) {
		// super();
		this.brand = _brand
		this.model = _model
		this.price = _price
	}
}

const myPc: IComputer = new Computer("OEM", "oldAf", 6001)

console.log(myPc.brand, myPc.model, myPc.price)

interface User {
	name: string
	password: string
}

function conectUser(user: User): boolean {
	if (user.name === "luisfelipe" && user.password === "1234") {
		return true
	} else {
		return false
	}
}

const newUser: User = {
	name: "luisfelipe",
	password: "1234",
}

const fakeUser: User = {
	name: "luisfelipe",
	password: "12345",
}
console.log(conectUser(newUser))
console.log(conectUser(fakeUser))

function getUserWhoIsGoat(): User {
	return {
		name: "luisfelipe",
		password: "1234",
	}
}

console.log(getUserWhoIsGoat())

// There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface.
// TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

// You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.

// Generics
// Generics provide variables to types.
// A common example is an array.
// An array without generics could contain anything.
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

// You can declare your own types that use generics:

interface Backpack<Type> {
	add: (obj: Type) => void
	get: () => Type

	// This line is a shortcut to tell TypeScript there is a
	// constant called `backpack`, and to not worry about where it came from.

}
declare const backpack:Backpack<string>

// object is a string, because we declared it above as the variable part of Backpack.
const object  = backpack.get()

// Since the backpack variable is a string, you can't pass a number to the add function.

// backpack.add(25)