const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay)
)

export const mergeSort = async(array) => {
    let temp
    let sorted = false
    let checkCount = 0
    let timeout = 25 + (1500 / array.length)
    while(!sorted) {
        sorted = true
        for(let i = 1; i < array.length; i++) {
            if(array[i].value < array[i - 1].value) {
                await sleep(timeout)
                temp = array[i]
                array[i] = array[i - 1]
                array[i - 1] = temp
                sorted = false
            }
            checkCount++
        }
    }
    console.log("Merge sorted after " + checkCount + " checks (n=" + array.length + ")")
}