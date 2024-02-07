const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index - 1, 0, value)
    changePosition(arr, index - 1, amount - 1)
}

function minimumBribes(q) {
    let arr = Array.from(q).sort(), narrowed = 0, isOver = false
    let i = 0
    while(!isOver && i < q.length){
        const num = q[i]
        let target = arr.indexOf(num)
        if(!(i === target)){
            const amount = target - i
                if(amount >= 1){
                    const value = arr.splice(target, 1)
                    arr.splice(--target, 0, num)
                }if(amount == 2){
                    const value = arr.splice(target, 1)
                    arr.splice(--target, 0, num)
                }if(amount > 2){
                    isOver = true
                }
                narrowed += amount
        }
        i++
    }
    isOver ? console.log('Too caothic') : console.log(narrowed)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])