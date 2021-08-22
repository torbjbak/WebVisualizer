const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay)
)

export const gridPaths = async(grid) => {
    let n = grid.length
    let m = grid[0].length
    let pathCount = 0
    console.log("Found " + pathCount + " paths for a " + n + "x" + m + " grid")
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            await sleep(300)
            grid[i][j] = pathCount
            console.log(i, j, grid[i][j])
            pathCount++
        }
    }
    return pathCount
}