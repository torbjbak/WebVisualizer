import { sleep } from "../utils/Sleep"

export const gameOfLife = async(grid) => {
    let gridHeight = grid.length
    let gridWidth = grid[0].length
    while(true) {
        await sleep(500)
        for(let i = 0; i < gridHeight; i++) {
            for(let j = 0; j < gridWidth; j++) {
                checkNeighbours(grid, i, j, gridHeight, gridWidth)
            }
        }
        for(let i = 0; i < gridHeight; i++) {
            for(let j = 0; j < gridWidth; j++) {
                grid[i][j].alive = grid[i][j].next
            }
        }
    }
}

const checkNeighbours = function(grid, y, x, gridHeight, gridWidth) {
    let liveNeighbours = 0
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            if(
                y + i >= 0 
                && y + i < gridHeight 
                && x + j >= 0 
                && x + j < gridWidth
                && !(i == 0 && j == 0)
                && grid[y + i][x + j].alive
            ) liveNeighbours++     
        }
    }
    if(grid[y][x].alive) {
        if(liveNeighbours == 2 || liveNeighbours == 3) grid[y][x].next = true
        else grid[y][x].next = false
    } else {
        if(liveNeighbours == 3) grid[y][x].next = true
        else grid[y][x].next = false
    }
}