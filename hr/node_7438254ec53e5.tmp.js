const isPalindrome = (arr) => {
    const reverseArr = arr.slice().reverse()
    return JSON.stringify(arr) === JSON.stringify(reverseArr)
}

const groupArray = (arr) => {
    const length = arr.length
    if(length <= 1)
        return arr
    let smallArr = [], newArr = []
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < length - 1; j++){
            smallArr.push(arr[j + i])
        }
        newArr.push(smallArr)
        smallArr = []
    }
    return newArr
}

console.log(groupArray(['a', 'a', 'a', 'b']))

const palindrome = (str) => {
    const arr = str.split('')
    let aux = 0, values = [].push(arr)
    console.log(values)
    while(aux !== -1){
        if(isPalindrome(arr)){
            aux = -1
            return
        }

    }
}
const str = 'abaette'
console.log(isPalindrome(['a','b','a']))
console.log(palindrome('baa'))
console.log(palindrome('aaa'))