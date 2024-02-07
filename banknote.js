var value = 576
const banknotes = [100, 50, 20, 10, 5, 2, 1]
console.log(value)
banknotes.map(bn => {
    const amount = Math.floor(value/bn)
    console.log(`${amount} nota(s) de R$ ${bn},00`)
    value = value - (amount * bn)
})