class Pai {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    casar(){
        console.log("pai se casou")
    }
}

class Filho extends Pai{
    constructor(nome, brincar){
        super(nome)
        this.brincar = brincar
    }
}

var f = new Filho("Ohio", true)
f.idade = 10
console.log(f)