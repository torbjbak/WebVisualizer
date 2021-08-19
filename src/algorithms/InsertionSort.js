const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay)
)

export const insertionSort = async(array) => {
    let temp
    let sorted = false
    let moveCount = 0
    while(!sorted) {
        sorted = true
        for(let i = 1; i < array.length; i++) {
            if(array[i].value < array[i - 1].value) {
                await sleep(350)
                temp = array[i]
                array[i] = array[i - 1]
                array[i - 1] = temp
                sorted = false
            }
            moveCount++
        }
    }
    console.log("Insertion sorted after " + moveCount + " checks (n=" + array.length + ")")
}