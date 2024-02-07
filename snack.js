var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const [code, quantity] = lines[0]

const snack = (code) => {(
    "1": `Total: R$ ${(quantity*4).toFixed(2)}`,
    "2": `Total: R$ ${(quantity*4).toFixed(2)}`,
    "3": `Total: R$ ${(quantity*4).toFixed(2)}`,
    "4": `Total: R$ ${(quantity*4).toFixed(2)}`,
    "5": `Total: R$ ${(quantity*4).toFixed(2)}`,
)}

const teste = (t) => ({
    '1': 'esse'
})[t]