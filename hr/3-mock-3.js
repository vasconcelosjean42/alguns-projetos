const isPalindrome = (arr) => {
    const reverseArr = arr.slice().reverse()
    return JSON.stringify(arr) === JSON.stringify(reverseArr)
}

const compare = (first, second) => {
    return first === second
}

function palindromeIndex(s) {
    const arr = s.split('')
    if(isPalindrome(arr))
        return -1
    const halfLength = Math.ceil(arr.length/2)
    let values = []
    for(let i = 0, j = arr.length - 1; i < halfLength; i++, j--){
        if(!compare(arr[i], arr[j])){
            if(compare(arr[i + 1], arr[j]) && compare(arr[i + 2], arr[j - 1])){
                arr.splice(i, 1)
                values.push(i)
                j--
            }else if(compare(arr[i], arr[j - 1]) && compare(arr[i + 1], arr[j - 2])){
                arr.splice(j, 1)
                values.push(j)
                j--
            }
        }
    }
    console.log(arr)
    return values
}

console.log(palindromeIndex('fcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwf'))