const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay)
)

export const quicksort = async(array) => {
    let temp
    let checkCount = 0
    let length = array.length
    let timeout = 50 + (1500 / length)
    let pivotIndex = length - 1
    let pivot = array[pivotIndex].value

    for(let i = pivotIndex - 1; i >= 0; i--) {
        if(array[i].value > pivot) {
            await sleep(timeout)
            temp = array[i]
            array.splice(i, 1)
            array.push(temp)
            pivotIndex--
        }
        checkCount++
    }
    return checkCount
}