var A, B
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("First number: ", (number) => {
    A = number
})

B = 10
const X = A + B
console.log(`X = ${X}\\n`)