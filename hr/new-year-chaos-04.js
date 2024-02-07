const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index + 1, 0, value[0])
    changePosition(arr, index + 1 , amount - 1)
}

function minimumBribes(q) {
    let bride = 0
    const length = q.length - 1
    for(let i = length; i >= 0; i--){
        let compareIndex = i + 1
        if(q[i] === compareIndex){
            
        }else if(!(q[i] < compareIndex)){
            const amount = q[i] - compareIndex
            if(amount > 2){
                bride = 'Too chaotic'
                break
            }
            changePosition(q, i, amount)
            bride += amount
            i = compareIndex
        }
    }
    console.log(bride)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])
minimumBribes([2, 5, 1, 3, 4])
minimumBribes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])
minimumBribes([2, 1, 5, 6, 3, 4, 9, 8, 11, 7, 10, 14, 13, 12, 17, 16, 15, 19, 18, 21, 20])