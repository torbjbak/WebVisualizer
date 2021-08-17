<template>
    <section class="container">
        <div class="buttons">
            <button class="button is-primary">Insertion sort</button>
            <button class="button is-primary">Quicksort</button>
        </div>

        <div class="field has-addons">
            <div class="control">
                <input id="nrDataPoints" class="input is-rounded" type="number" v-model="nrDataPoints" placeholder="Nr of data points">
            </div>
            <div class="control">
                <a class="button is-rounded is-info" @click="randomData()">Fill chart!</a>
            </div>
        </div>

        <BarChart :dataObject="dataObject" />
    </section>
</template>

<script>
import BarChart from '@/components/BarChart.vue'
import { reactive, ref } from 'vue'


export default {
    name: 'Sorting',

    components: {
        BarChart
    },

    setup () {
        const nrDataPoints = ref()

        const dataObject = reactive({})

        const makeARandomNumber = function(){
            return Math.floor(Math.random() * 20);
        }

        const randomData = function() {
            var array
            if(nrDataPoints.value < 1) {
                array = Array(1).fill(0).map(makeARandomNumber)
                console.log("Input too low, set to 1 by default")
            } else if(nrDataPoints.value > 50) {
                array = Array(50).fill(0).map(makeARandomNumber)
                console.log("Input too high, set to 50 by default")
            } else {
                array = Array(nrDataPoints.value).fill(0).map(makeARandomNumber)
            }
            dataObject.value = Object.assign({}, array)
        }

        return {
            nrDataPoints,
            dataObject,
            randomData
        }
    }
}
</script>

<style scoped>
.field {
    justify-content: center;
}
.buttons {
    justify-content: center;
}
</style>