function calcula(valor){
    return valor + 4
}

console.log(calcula(10))

var pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

pessoa.idade = 20

console.log(pessoa) 

let p = new Object()
p.nome = "Jean"
p.sobrenome = "Vasconcelos"

p.falaNome = () => console.log("nome: " + this.nome)

console.log(p.falaNome())

function teste(...args){
    console.log(Math.max(...args))
}

teste(1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5,4,3,32,12)