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
        console.log('newArr[newArr.length - 1]: ' + newArr[newArr.length - 1])
        console.log('newArr: '+ newArr)
        // if(JSON.stringify(newArr[newArr.length - 1]) !== JSON.stringify(smallArr))
        //     newArr.push(smallArr)
        smallArr = []
    }
    return newArr
}

const palindrome = (str) => {
    const arr = str.split('')
    let aux = 0, values = [], level = 0, ret = []
    values.push(arr)
    console.log(values)
    while(aux !== -1){
        console.log(values.length)
        values.some((v, vIndex) => {
            if(isPalindrome(v)){
                console.log('palindromo: ' + v)
                aux = -1
                if(v.length === arr.length){
                    
                }else{
                    for(let i = 0; i < vIndex; i++)
                        ret.push(i)
                    for(let i = v.length + vIndex; i < arr.length; i++){
                        ret.push(i)
                    }
                }
                ret.push(aux)
                return -1
            }
        })
        values = values.reduce((prev, cur) => prev.concat(groupArray(cur)), [])
        console.log(values)
        level++
    }
    ret = ret.reduce((prev, cur) => prev + '\n' + cur,'')
    return ret
}
const str = 'abaette'
console.log(palindrome('abcdee'))
