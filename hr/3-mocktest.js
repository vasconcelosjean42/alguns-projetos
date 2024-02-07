const isPalindrome = (str) => {
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

const palindrome = (str) => {
    if(isPalindrome(str)){
        return -1
    }else{
        const length = str.length
        const firstElement = str.split('').slice(0,1)
        const lastElement = str.split('').slice(length,1)
        if(isPalindrome(firstElement)){
            return 0 + '\n' + palindrome(firstElement.join(''))
        }else if(isPalindrome(lastElement)){
            return length + '\n' + palindrome(lastElement.join(''))
        }else{
            return 0 + '\n' + palindrome(firstElement)
        }
    }
    
    var newStr = str.split('')
    newStr.shift()
    return '0' + '\n' + palindrome(newStr.join(''))
}
const str = 'abaette'
console.log(palindrome('aaab'))
console.log(palindrome('baa'))
console.log(palindrome('aaa'))