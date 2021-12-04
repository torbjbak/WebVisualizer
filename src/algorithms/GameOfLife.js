import { sleep } from "../utils/Sleep"

export const gameOfLife = async(grid, running) => {
    let gridHeight = grid.length
    let gridWidth = grid[0].length
    while(running) {
        await sleep(2)
        for(let i = 0; i < gridHeight; i++) {
            for(let j = 0; j < gridWidth; j++) {
                grid[i][j].alive = !grid[i][j].alive
            }
        }
    }
}