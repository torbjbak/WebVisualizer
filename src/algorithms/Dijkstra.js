import { sleep } from "../utils/Sleep"

export const dijkstra = async(grid, startX, startY) => {
    let x = startX
    let y = startY

    let square = {
        x: x,
        y: y,
        path: [],
        type: 3
    }

    let queue = [square]
    let time = 25 + (1500 / (grid.length + grid[0].length))

    while(queue.length > 0) {
        let currentSquare = queue.shift()
        await sleep(time)

        for(let i = 0; i <= 3; i++) {
            let newSquare = explore(currentSquare, i, grid)
            if(newSquare.type == 4) {
                return getPathObject(newSquare.path, startX, startY)
            } else if(newSquare.type == 0) {
                queue.push(newSquare)
            }
        }
    }
    return []
}

const explore = function(currentSquare, direction, grid) {
    let newPath = currentSquare.path.slice()
    newPath.push(direction)

    var x = currentSquare.x
    var y = currentSquare.y

    if(direction == 0) {
        x++
    } else if(direction == 1) {
        y++
    } else if(direction == 2) {
        x--
    } else if(direction == 3) {
        y--
    }

    let newSquare = {
        x: x,
        y: y,
        path: newPath,
        type: -1
    }
    newSquare.type = checkSquare(newSquare, grid)

    if(newSquare.type == 0) {
        grid[x][y].type = 1
    }

    return newSquare
}

const checkSquare = function(square, grid) {
    let x = square.x
    let y = square.y

    if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        return -1
    }
    return grid[x][y].type
}

const getPathObject = function(path, startX, startY) {
    let x = startX
    let y = startY
    let pathObject = []

    for(let i = 0; i < path.length - 1; i++) {
        if(path[i] == 0) {
            x++
        } else if(path[i] == 1) {
            y++
        } else if(path[i] == 2) {
            x--
        } else if(path[i] == 3) {
            y--
        }
        pathObject.push({
            x: x,
            y: y
        })
    }
    return pathObject
}