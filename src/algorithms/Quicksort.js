import { sleep } from "../utils/Sleep"

export const quicksort = async(array, left, right, fullLength) => {
    let length = array.length

    if(length <= 1) {
        return 1
    }

    let checkCount = 0
    let time = 25 + (1500 / fullLength)

    let part = await partition(array, left, right, time); //index returned from partition
    let index = part[0]
    checkCount += part[1]

    if (left < index - 1) { //more elements on the left side of the pivot
        checkCount += await quicksort(array, left, index - 1, fullLength)
    }
    if (index < right) { //more elements on the right side of the pivot
        checkCount += await quicksort(array, index, right, fullLength)
    }

    return checkCount
}

const partition = async(array, left, right, time) => {
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
            await sleep(time)
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