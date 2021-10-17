import { sleep } from "../utils/Sleep"

export const mergeSort = async(array) => {
    let temp
    let sorted = false
    let checkCount = 0

    while(!sorted) {
        sorted = true
        for(let i = 1; i < array.length; i++) {
            if(array[i].value < array[i - 1].value) {
                await sleep(length)
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