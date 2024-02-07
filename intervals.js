var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const intervals = [25, 50, 75, 100]
var value = 0
intervals.reduce((prev,cur) => {
    if(prev < lines[0] < cur){
        if(cur === 25){
            console.log(`Intervalo [${prev},${cur}]`)
        }else{
            console.log(`Intervalo (${prev},${cur}]`)   
        }
        value = 1
    }
}, 0)
if(value !== 1)
    console.log('Fora do intervalo')