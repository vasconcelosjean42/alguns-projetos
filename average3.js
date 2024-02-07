var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [n1, n2, n3, n4] = lines[0].split(' ').map(l => Number(l))
var n5 = Number(lines[1]).toFixed(1)

var average = ((n1 * 2 + n2 * 3 + n3 * 4 + n4)/(2 + 3 + 4 + 1)).toFixed(1)
const newAverage = Number((average + n5)/2)
console.log(`newAvarege: ${newAverage}`)
console.log(`((${average} + ${n5})/2)`)

const calculateAverage = () => {
    console.log(`Media: ${average}`)
    if(average < 5){
        console.log("Aluno reprovado.")
        return
    }else if(average >= 5 && average < 7){
        console.log("Aluno em exame.")
        console.log(`Nota do exame: ${n5}`)
        if(newAverage >= 5){
            console.log('Aluno aprovado.')
        }else{
            console.log('Aluno reprovado.')
        }
        console.log(`Media final: ${newAverage}`)
    }else{
        console.log("Aluno aprovado.")
        return
    }
}

calculateAverage()
