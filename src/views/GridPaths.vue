<template>
    <section class="container">
        <div class="buttons">
            <button 
                class="button is-rounded is-info"
                >Button
            </button>

        </div>

        <div class="field has-addons">
            <div class="control">
                <input id="nrDataPoints" class="input is-rounded" type="number" v-model="n" placeholder="n">
            </div>
            <div class="control">
                <input id="nrDataPoints" class="input is-rounded" type="number" v-model="m" placeholder="m">
            </div>
            <div class="control">
                <a class="button is-rounded is-link" @click="initGrid()">Fill grid</a>
            </div>
            <div class="control">
                <a class="button is-rounded is-dark" @click="findPaths()">Find paths</a>
            </div>
        </div>

        <div class="grid container">
            <div class="row" v-for="n in matrix" :key="n">
                <div class="square" v-for="m in n" :key="m">
                    <Square
                        :colorCode="m"
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
import Square from '@/components/Square.vue'
import { ref } from 'vue'
import { gridPaths } from '@/algorithms/GridPaths.js'

export default {
    name: 'GridPaths',

    components: {
        Square
    },

    setup() {
        const n = ref()
        const m = ref()
        const infoText = ref("Fill in the number of rows (n) and columns (m) to generate a grid")
        const matrix = ref([])

        const initGrid = function() {
            infoText.value = ""

            if(n.value < 1) {
                n.value = 1
                infoText.value = "One or more inputs set too low or high, min 1 and max 30"
            } else if(n.value > 30) {
                n.value = 30
                infoText.value = "One or more inputs set too low or high, min 1 and max 30"
            }

            if(m.value < 1) {
                m.value = 1
                infoText.value = "One or more inputs set too low or high, min 1 and max 30"
            } else if(n.value > 30) {
                m.value = 30
                infoText.value = "One or more inputs set too low or high, min 1 and max 30"
            }

            matrix.value = new Array(n.value).fill(0).map(() => new Array(m.value).fill(0))
        }

        const findPaths = async() => {
            let pathCount = await gridPaths(matrix.value)
            infoText.value = "Found " + pathCount + " paths for a " + n.value + "x" + m.value + " grid"
        }

        return {
            n,
            m,
            infoText,
            matrix,
            initGrid,
            findPaths
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
    gap: 0.25rem;
}
.row {
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
}
.square {
    padding: 0;
}
.control {
    max-width: 6rem;
}
</style>