const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
const grid2 = ['lekjh', 'fghij', 'olmkn', 'zzzzz', 'xywuv']
const grid3 = ['zxmcn', 'fghij', 'olmkn', 'trpqs', 'xywuv']

function gridChallenge(grid) {
    const length = grid.length
    let lineGrid = grid.map(g => g.split(''))
    let columnGrid = [...Array(length)].map(a => Array(length))
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            columnGrid[i].splice(j,1,lineGrid[j][i])
        }
    }
    console.log(lineGrid)
    console.log(columnGrid)
    const lineGridSorted = lineGrid.map(lg => lg.sort((a,b) => a - b))
    const columnGridSorted = columnGrid.map(cg => cg.sort((a,b) => a - b))
    let possible = ''
    console.log(lineGridSorted)
    console.log(columnGridSorted)
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(lineGridSorted[j][i] !== columnGridSorted[i][j])
                return 'no'
        }
    }
    return 'yes'
}

console.log(gridChallenge(grid))
console.log(gridChallenge(grid2))
console.log(gridChallenge(grid3))