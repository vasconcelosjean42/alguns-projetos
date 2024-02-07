function truckTour(petrolpumps) {
    const values = petrolpumps.reduce((prev, cur, index) => {
        const sum = cur[0] - cur[1]
        console.log(sum)
        if(prev[0] + sum < 0){
            return [0, index + 1]
        }else{
            return [prev[0] + sum, prev[1]]
        }
    }, [0,0])
    console.log(values)
}

truckTour([ [ 1, 5 ], [2,3], [9, 1], [ 10, 3 ], [ 3, 4 ], [8, 1], [9, 1], [9, 2] ])
truckTour([ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ]])