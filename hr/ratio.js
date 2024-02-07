function plusMinus(arr) {
    const amount = arr.reduce((prev, cur) => {
        if(cur > 0)
            prev[0] += 1
        if(cur < 0)
            prev[1] += 1
        if(cur == 0)
            prev[2] += 1
        return prev
    }, [0,0,0])
    const length = arr.length
    const ratios = amount.map(a => (a/length).toFixed(6))
    return ratios
}
console.log(Number())
plusMinus([1,1,0,-1,-1]).forEach(pm => console.log(pm))