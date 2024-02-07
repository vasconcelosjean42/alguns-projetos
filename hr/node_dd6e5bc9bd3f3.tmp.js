const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index + 1, 0, value[0])
    changePosition(arr, index - 1 , amount - 1)
}
arr = [1, 2, 5, 3, 4, 7, 8, 6]
changePosition(arr, 6, 2)
console.log(arr)
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
            changePosition(q, i, amount)
            ++i
            bride += amount
        }
    }
    console.log(bride)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])