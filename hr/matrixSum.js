const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

const maxSum = (arr) => {
    const n = arr[0].length/2
    var greaterValues = []
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            const loc = arr[0].length - 1
            const partner = [arr[i][j], arr[loc - i][j], arr[i][loc - j], arr[loc - i][loc - j]]
            greaterValues.push(Math.max(...partner))
        }
    }
    return greaterValues.reduce((prev, cur) => prev + cur, 0)
}

console.log(maxSum(arr))