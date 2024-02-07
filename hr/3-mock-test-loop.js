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

const palindrome = (str) => {
    const arr = str.split('')
    if(isPalindrome(arr))
        return -1
    let aux = 0, values = [], level = 0, ret = []
    values.push(arr)
    while(aux !== -1){
        values.some((v, vIndex) => {
            if(isPalindrome(v)){
                aux = -1
                if(v.length === arr.length){
                    
                }else{
                    for(let i = 0; i < vIndex; i++)
                        ret.push(i)
                    for(let i = v.length + vIndex; i < arr.length; i++){
                        ret.push(i)
                    }
                }
                return -1
            }
        })
        values = values.reduce((prev, cur) => {
            if(JSON.stringify(prev[prev.length - 1]) !== JSON.stringify(groupArray(cur)[0])){
                return prev.concat(groupArray(cur))
            }else{
                const ga = groupArray(cur)
                ga.shift()
                return prev.concat(ga)
            }
                
        }, [])
        level++
    }
    ret = ret.reduce((prev, cur) => prev !== '' ? prev + ' ' + cur : cur,'')
    return ret
}
const str = 'abaette'
console.log(palindrome('daaahgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgyghbc'))
