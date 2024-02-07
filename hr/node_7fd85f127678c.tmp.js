const changePosition = (arr, index, amount) => {
    if(amount === 0)
        return
    const value = arr.splice(index, 1)
    arr.splice(index + 1, 0, value)
    changePosition(arr, index + 1, amount - 1)
}

function minimumBribes(q) {
    const length = q.length - 1
    for(let i = length; i > 0; i++){
        let compareIndex = i + 1
        if(!(q[i] < compareIndex)){

            changePosition(q, q[i], 0)
        }
    }
    console.log(q)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])