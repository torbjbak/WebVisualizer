import { sleep } from "../utils/Sleep"

export const insertionSort = async(array) => {
    let temp
    let checkCount = 0
    let length = array.length

    for(let i = 1; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(array[j].value < array[j - 1].value) {
                await sleep(length)
                temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
            checkCount++
        }
    }
    return checkCount
}