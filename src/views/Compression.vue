<template>
    <section class="container">
        <div class="buttons">
            <button 
                class="button is-rounded is-info"
                >Huffman
            </button>

        </div>

        <div class="columns">
            <div class="column">
                <textarea 
                    class="textarea has-fixed-size" 
                    rows="10" 
                    placeholder="Enter an input text to be compressed" 
                    v-model="compInput"
                />
            </div>
            <div class="column is-narrow is-flex">
                <button class="button is-large is-primary" @click="compress(compInput)">Compress</button>
            </div>
            <div class="column">
                <textarea 
                    class="textarea has-fixed-size" 
                    rows="10" 
                    placeholder="Compressed output appears here" 
                    v-model="compOutput"
                    readonly
                />
                <div class="block">{{ compInfo }}</div>
            </div>
        </div>
        
    </section>
</template>

<script>
import { ref } from 'vue'
import { huffman } from '@/algorithms/Huffman.js'

export default {
    name: 'Compression',

    setup () {

        const selectedComp = ref("Huffman")
        const compInfo = ref(" ")
        const compInput = ref("Compress this, why don't you?")
        const compOutput = ref("")

        const compress = async() => {
            await huffman(compInput.value, compOutput)

            compInfo.value = "Using " + selectedComp.value + " algorithm, new bit count is " 
                + (100 * compOutput.value.length / (8 * compInput.value.length)).toFixed(2) + "% of original count." 
        }


        return {
            selectedComp,
            compInfo,
            compInput,
            compOutput,
            compress
        }
    }
}
</script>

<style scoped>
.buttons {
    justify-content: center;
}
.columns button {
    margin: auto;
}
</style>