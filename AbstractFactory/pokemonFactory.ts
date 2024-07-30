interface iPokemonProps {
    name:string
    color:string
}
interface iAttack {

}

abstract class Pokemon implements iPokemonProps {
    public name: string
    public color: string

    constructor(props:iPokemonProps){
        this.name = props.name
        this.color = props.color
    }
    abstract attack ():iAttack
}

class Pikachu extends Pokemon {
    private cat:TapedItem<Battery[],Cat>

    constructor(cat:TapedItem<Battery[],Cat>) {
        super({name:'Pikachu',color:'yellow'})
        this.cat = cat
    }
    attack() :ZapAttack {
        return this.cat.zapAttack()
    }
}

class PikachuFactory {
    public static create():Pikachu {
        const batteries:Battery[]= [
            new Battery(),
            new Battery()
        ]
        const paint: Paint = new Paint('yellow')
        const tape:Tape = new Tape()
        const cat : Cat = new Cat()

        const paintedCat :PaintedItem<Cat> = Paint.paintItem(cat,paint)
        const catTapedByBatteries: TapedItem<Battery[],Cat> = Tape.combineItems(batteries,paintedCat)

        return new Pikachu(catTapedByBatteries)
    }
}

const pikachu: Pikachu = PikachuFactory.create();

class Paint {

}
class Tape{

}
class Cat {

}
class Battery {

}
