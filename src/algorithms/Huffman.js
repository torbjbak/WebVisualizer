import { sleep } from "../utils/Sleep"

export const huffman = async(input, output) => {
    for(let c of input) {
        await sleep(250)
        output += c + " "
    }
}