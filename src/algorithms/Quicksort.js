import { sleep } from "../utils/Sleep"

export const quicksort = async(array, left, right, maxLength) => {
    let length = array.length

    if(length <= 1) {
        return 1
    }

    let checkCount = 0

    let part = await partition(array, left, right, maxLength); //index returned from partition
    let index = part[0]
    checkCount += part[1]

    if (left < index - 1) { //more elements on the left side of the pivot
        checkCount += await quicksort(array, left, index - 1, maxLength)
    }
    if (index < right) { //more elements on the right side of the pivot
        checkCount += await quicksort(array, index, right, maxLength)
    }

    return checkCount
}

const partition = async(array, left, right, maxLength) => {
    let checkCount = 0

    var pivot   = array[Math.floor((right + left) / 2)].value,
        i       = left,
        j       = right

    while (i <= j) {
        while (array[i].value < pivot) {
            checkCount++
            i++
        }
        while (array[j].value > pivot) {
            checkCount++
            j--
        }
        if (i <= j) {
            checkCount++
            await sleep(maxLength / 2)
            swap(array, i, j)
            i++
            j--
        }
    }

    return [i, checkCount]
}

function swap(array, leftIndex, rightIndex){
    var temp = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temp
}