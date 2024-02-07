function minimumBribes(q) {
    let brides = 0
    q.some((num, i) => {
        if(brides !== 'Too chaotic'){
            if(num > (i + 1)){
                let sub = 0
                sub = num - (i + 1)
                if(sub <= 2){
                    brides += sub
                }else{
                    brides = 'Too chaotic'
                }
            }   
        }
    })
    console.log(brides)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])