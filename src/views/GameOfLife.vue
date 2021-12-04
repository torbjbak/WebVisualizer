<template>
    <section class="container">
        <div class="field has-addons">
            <div class="control">
                <a class="button is-rounded is-link" @click="initGrid()">Fill grid</a>
            </div>

            <div class="control">
                <a class="button is-rounded is-dark" @click="startClick()">
                    {{ buttonName }}
                </a>
            </div>

            <div class="control">
                <a class="button is-rounded is-link" @click="initGrid()">Reset</a>
            </div>
        </div>

        <div class="grid container">
            <div class="row" v-for="row in matrix" :key="row">
                <div class="pixel" v-for="pixel in row" :key="pixel.coor">
                    <Pixel
                        :alive="pixel.alive"
                        @click="clickPixel(pixel)"
                    />
                </div>
            </div>
        </div>
        
        <div class="box">
            {{ infoText }}
        </div>
    </section>
</template>

<script>
import Pixel from '@/components/Pixel.vue'
import { ref } from 'vue'
import { gameOfLife } from '@/algorithms/GameOfLife.js'
import { PixelClass } from '@/utils/PixelClass.js'

export default {
    name: 'GameOfLife',

    components: {
        Pixel
    },

    setup() {
        const infoText = ref("Click pixels to set alive or not, then start the game!")
        const matrix = ref([])
        const running = ref(false)
        const buttonName = ref("Start")

        const initGrid = function() {
            running.value = false
            buttonName.value = "Start"

            matrix.value = new Array()
            for(let i = 0; i < 30; i++) {
                matrix.value.push([])
                for(let j = 0; j < 40; j++) {
                    matrix.value[i].push(new PixelClass(i, j, false))
                }
            }
        }

        const startClick = async() => {
            if(running.value) {
                buttonName.value = "Start"
                running.value = false
            } else {
                buttonName.value = "Pause"
                running.value = true
                await gameOfLife(matrix.value, running.value)
            }
        }

        const clickPixel = function(pixel) {
            if(!running.value)
                pixel.alive = !pixel.alive
        }

        return {
            infoText,
            matrix,
            running,
            buttonName,
            initGrid,
            startClick,
            clickPixel
        }
    }
}
</script>

<style scoped>
.field {
    justify-content: center;
    margin-bottom: 1.5rem;
}
.buttons {
    justify-content: center;
}
.grid {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 1px;
}
.row {
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 1px;
}
.square {
    padding: 0;
}
.control {
    width: fit-content;
}
#nrDataPoints {
    width: 6rem;
}
</style>