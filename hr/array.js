const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
const grid2 = ['lekjh', 'fghij', 'olmkn', 'zzzzz', 'xywuv']
const grid3 = ['zxmcn', 'fghij', 'olmkn', 'trpqs', 'xywuv']

function gridChallenge(grid) {
    const length = grid.length
    let lineGrid = grid.map(g => g.split(''))
    let columnGrid = [...Array(length)].map(a => Array(length))
    const lineGridSorted = lineGrid.map(lg => lg.sort())
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            columnGrid[i].splice(j,1,lineGridSorted[j][i])
        }
    }
    const columnGridSorted = columnGrid.map(cg => cg.sort())
    console.log(lineGridSorted)
    console.log(columnGridSorted)
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(lineGridSorted[j][i] !== columnGridSorted[i][j])
                return 'NO'
        }
    }
    return 'YES'
}

console.log(gridChallenge(grid))
console.log(gridChallenge(grid2))
console.log(gridChallenge(grid3))