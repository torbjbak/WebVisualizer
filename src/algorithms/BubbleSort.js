import { sleep } from "../utils/Sleep"

export const bubbleSort = async(array) => {
    let temp
    let sorted = false
    let checkCount = 0
    let n = array.length
    
    while(!sorted) {
        sorted = true
        for(let i = 1; i < n; i++) {
            if(array[i].value < array[i - 1].value) {
                await sleep(array.length)
                temp = array[i]
                array[i] = array[i - 1]
                array[i - 1] = temp
                sorted = false
            }
            checkCount++
        }
        n--
    }
    return checkCount
}