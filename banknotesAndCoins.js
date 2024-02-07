var value = (1234.56).toFixed(2)
const notes = [100, 50, 20, 10, 5, 2]
const coins = [1, 0.5, 0.25, 0.10, 0.05, 0.01]
console.log('NOTAS:')
notes.map(n => {
    var amount = Math.floor(value/n).toFixed(2)
    console.log(`${amount} nota(s) de R$ ${n.toFixed(2)}`)
    value = (value - n*amount).toFixed(2)
})

console.log('MOEDAS:')
coins.map(c => {
    amount = Math.floor(value/c).toFixed(2)
    console.log("value: " + value)
    console.log(`${amount} moeda(s) de R$ ${c.toFixed(2)}`)
    value = (value - c*amount).toFixed(2)
})
