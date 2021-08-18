<template>
    <section class="container">
        <div class="buttons">
            <button class="button is-primary" :disabled="sorting">Insertion sort</button>
            <button class="button is-primary" :disabled="sorting">Quicksort</button>
        </div>

        <div class="field has-addons">
            <div class="control">
                <input id="nrDataPoints" class="input is-rounded" type="number" v-model="nrDataPoints" placeholder="Nr of data points">
            </div>
            <div class="control">
                <a class="button is-rounded is-info" @click="randomData()">Fill chart</a>
            </div>
            <div class="control">
                <a class="button is-rounded is-primary" @click="sort()">Sort</a>
            </div>
        </div>

        <div class="chart container">
            <div class="element" v-for="i in dataObject" :key="i.name">
                <Bar 
                    :name="i.name"
                    :value="i.value"
                    :barNr="Object.keys(dataObject).length"
                />
            </div>
        </div>
    </section>
</template>

<script>
import BarChart from '@/components/BarChart.vue'
import Bar from '@/components/Bar.vue'
import { reactive, ref } from 'vue'


export default {
    name: 'Sorting',

    components: {
        BarChart,
        Bar
    },

    setup () {
        const nrDataPoints = ref()

        const dataObject = reactive({})

        const sorting = ref(false)

        const sort = function() {
            sorting.value = !sorting.value
        }

        const randomData = function() {
            nrDataPoints.value

            if(nrDataPoints.value < 1) {
                nrDataPoints.value = 1
                console.log("Input too low, set to 1 by default")
            } else if(nrDataPoints.value > 26) {
                nrDataPoints.value = 26
                console.log("Input too high, set to 26 by default")
            }

            const data = []
            for(let i = 0; i < nrDataPoints.value; i++) {
                data.push({
                    'name': String.fromCharCode(65 + i),
                    'value': Math.floor(Math.random() * 20 + 1)
                })
            }
            
            Object.keys(dataObject).forEach(k => delete dataObject[k])
            Object.assign(dataObject, data)
        }

        return {
            nrDataPoints,
            dataObject,
            randomData, 
            sorting, 
            sort
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
.chart {
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 50%;
    min-height: 200px;
    gap: 5px;
}
.box {
    margin-bottom: 0;
}
.element {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

</style>