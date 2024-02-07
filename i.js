const list = new Array()
for(c = 'A'; c <= 'Z'; c++){
    list.push(c)
}
console.log(list)
const A = 'A'
console.log(A.charCodeAt(0))

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c] = lines[0].split(' ').map(l => Number(l))
console.log(
`TRIANGULO: ${(a*c/2).toFixed(3)}${\n}
CIRCULO: ${(3.14159*Math.pow(c, 2)).toFixed(3)}\\n
TRAPEZIO: ${(((a+b)*c)/2).toFixed(3)}\\n
QUADRADO: ${(Math.pow(b,2)).toFixed(3)}\\n
RETANGULO: ${(a*b).toFixed(3)}\\n`
)
