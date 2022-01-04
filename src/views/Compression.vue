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
                    v-model="input"
                />
            </div>
            <div class="column is-narrow is-flex">
                <div class="buttons">
                    <div class="arrows">
                        <button 
                            class="button is-large is-primary"
                            :disabled="!hasRun || outputIndex <= 0"
                            @click="outputIndex = outputIndex - 1"
                            >&#8592;
                        </button>
                        <button 
                            class="button is-large is-primary"
                            :disabled="!hasRun || outputIndex >= 2"
                            @click="outputIndex = outputIndex + 1"
                            >&#8594;
                        </button>
                    </div>

                    <button 
                        class="button is-large is-primary"
                        :disabled="input == ''"
                        @click="compress()"
                        >Compress
                    </button>
                </div>
            </div>
            <div class="column">
                <textarea 
                    class="textarea has-fixed-size" 
                    rows="10" 
                    placeholder="Compressed output appears here" 
                    v-model="output[outputIndex]"
                    readonly
                />
                <div class="block">{{ infoText[outputIndex] }}</div>
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
        const input = ref("Compress this, why don't you?")
        const output = ref([])
        const infoText = ref([])
        const outputIndex = ref(0)
        const hasRun = ref(false)

        const compress = function() {
            let out = huffman(input.value)
            output.value = out[0]
            infoText.value = out[1]

            outputIndex.value = 0
            hasRun.value = true
        }

        return {
            selectedComp,
            input,
            output,
            infoText,
            outputIndex,
            hasRun,
            compress
        }
    }
}
</script>

<style scoped>
.buttons {
    justify-content: center;
}

.buttons {
    display: flex;
    flex-direction: column;

}
.arrows {
    display: flex;
    flex-direction: row;
}
</style>