const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index + 1, 0, value[0])
    changePosition(arr, index + 1, amount - 1)
}

function minimumBribes(q) {
    let bride = 0
    const length = q.length - 1
    for(let i = length; i >= 0; i--){
        console.log(q)
        let compareIndex = i + 1
        if(!(q[i] < compareIndex)){
            const amount = q[i] - compareIndex
            if(amount > 2){
                bride = 'Too chaotic'
                break
            }
            i = q[i] - 1
            changePosition(q, i, amount)
            bride += amount
        }
    }
    console.log(bride)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])