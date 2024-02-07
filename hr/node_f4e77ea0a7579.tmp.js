const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index - 1, 0, value)
    changePosition(arr, index - 1, amount - 1)
}

function minimumBribes(q) {
    let bribes = 0
    for(let i = 0; i < q.length; i++){
        if(q[i] > i + 1){
            const amount = q[i] - (i + 1)
            if(amount <= 2){
                q.splice(i+ 1, 1)
                i--
                bribes += amount
            }else{
                console.log('Too chaotic')
            }
        }
    }
    console.log(bribes)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])