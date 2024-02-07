const numbers = [1,2,3,4,5,6,7,8,9,10]

const events = numbers.filter(n => {
    return n > 5
});
console.log(events)

var filteredNumbers = numbers.filter(
    function(n) {
        return n > 5
    }
)

console.log(filteredNumbers)

const employee = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var getPeople = employee.filter(e => e.nome.length < 5)

console.log(getPeople)

const products = [
    {id: 1, nome: "guarda-roupa", categoria: "moveis"},
    {id: 2, nome: "geladeira", categoria: "eletrodomestico"},
    {id: 3, nome: "estante", categoria: "moveis"},
    {id: 4, nome: "microondas", categoria: "eletrodomestico"},
    {id: 5, nome: "armario", categoria: "moveis"},   
]

var filteredProducts = products.filter(p => p.categoria === "eletrodomestico")

console.log(filteredProducts)


var num = numbers.map(n => n*2)

console.log(num)

var nameEmployee = employee.map(e => e.nome)

console.log(nameEmployee)

var soma = employee.reduce((total, {idade}) => {
    return total + idade
}, 0)

console.log(soma)

let foods = ['bread', 'rice', 'meat', 'pizza']

foods.forEach(f => console.log(f))