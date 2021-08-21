const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay)
)

export const insertionSort = async(array) => {
    let temp
    let checkCount = 0
    let timeout = 25 + (1500 / array.length)

    for(let i = 1; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(array[j].value < array[j - 1].value) {
                await sleep(timeout)
                temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
            checkCount++
        }
    }
    return checkCount
}