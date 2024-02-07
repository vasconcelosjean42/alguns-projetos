const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index - 1, 0, value)
    changePosition(arr, index - 1, amount - 1)
}

function minimumBribes(q) {
    let bribes = 0, aux = 0
    for(let i = 0; i < q.length; i++){
        console.log('array: ' + q)
        if(q[i] > i + 1){
            const amount = (q[i] - aux) - (i + 1)
            if(amount <= 2){
                console.log('removed: '+ q.splice(i, 1))
                console.log('amount:' + amount)
                bribes += Math.abs(amount)
                aux++
                i--
            }else{
                console.log('Too chaotic')
                break
            }
        }
    }
    console.log(bribes)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])