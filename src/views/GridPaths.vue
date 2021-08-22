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
                <a class="button is-rounded is-dark">Sort</a>
            </div>
        </div>

        <div class="grid container">
            <div class="row" v-for="n in matrix" :key="n">
                <div class="square" v-for="m in n" :key="m">
                    <Square
                        :squareColor="'#FF7F50'"
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
            console.log("n: ", n.value)
            console.log("m: ", m.value)
            console.log(matrix.value)
        }

        return {
            n,
            m,
            infoText,
            matrix,
            initGrid
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
    gap: 5px;
}
.box {
    margin-bottom: 0;
}
.row {
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 5px;
}
.square {
    padding: 0;
}
.control {
    max-width: 6rem;
}
</style>