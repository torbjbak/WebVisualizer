<template>
    <section class="container">
        <div class="buttons">
            <button 
                class="button is-rounded is-info"
                :disabled="sorting"
                @click="selectSort('bubble')"
                >Bubble sort
            </button>
            <button 
                class="button is-rounded is-danger"
                :disabled="true"
                @click="selectSort('quick')"
                >Quicksort
            </button>
            <button 
                class="button is-rounded is-primary"
                :disabled="sorting"
                @click="selectSort('insertion')"
                >Insertion sort
            </button>
            <button 
                class="button is-rounded is-warning"
                :disabled="true"
                @click="selectSort('merge')"
                >Merge sort
            </button>
        </div>

        <div class="field has-addons">
            <div class="control">
                <input id="nrDataPoints" class="input is-rounded" type="number" v-model="nrDataPoints" placeholder="Nr of data points">
            </div>
            <div class="control">
                <a class="button is-rounded is-link" @click="randomData()">Fill chart</a>
            </div>
            <div class="control">
                <a class="button is-rounded is-dark" @click="sort()">Sort</a>
            </div>
        </div>

        <div class="chart container">
            <div class="element" v-for="i in dataArray" :key="i.name">
                <Bar 
                    :name="i.name"
                    :value="i.value"
                    :barNr="dataArray.length"
                    :barColor="barColor"
                />
            </div>
        </div>
        
        <div class="box">
            {{ infoText }}
        </div>
    </section>
</template>

<script>
import Bar from '@/components/Bar.vue'
import { ref } from 'vue'
import { bubbleSort } from '@/algorithms/BubbleSort.js'
import { insertionSort } from '@/algorithms/InsertionSort.js'
import { quicksort } from '@/algorithms/Quicksort.js'

export default {
    name: 'Sorting',

    components: {
        Bar
    },

    setup () {
        const nrDataPoints = ref()
        const dataArray = ref([])
        const sorting = ref(false)
        const barColor = ref("#3f8ece")
        const selectedSort = ref("bubble")
        const infoText = ref("Select a sorting algorithm and fill the chart to begin!")

        const selectSort = function(selection) {
            selectedSort.value = selection
            infoText.value = ""

            switch(selection) {
                case "bubble":
                    barColor.value = "#3f8ece"
                    break
                case "quick":
                    barColor.value = "#f34660"
                    break
                case "insertion":
                    barColor.value = "#00d1b2"
                    break
                case "merge":
                    barColor.value = "#fee08a"
                    break
                default:
                    barColor.value = "#FF7F50"
            }
        }

        const randomData = function() {
            infoText.value = ""

            if(nrDataPoints.value < 1) {
                nrDataPoints.value = 2
                infoText.value = "Input too low, set to 2 by default"
            } else if(nrDataPoints.value > 100) {
                nrDataPoints.value = 100
               infoText.value = "Input too high, set to 100 by default"
            }

            const data = []
            for(let i = 0; i < nrDataPoints.value; i++) {
                data.push({
                    'name': String.fromCharCode(65 + i),
                    'value': Math.floor(Math.random() * 20 + 1)
                })
            }
            dataArray.value = data
        }

        const sort = async() => {
            sorting.value = true
            infoText.value = ""
            let checkCount

            switch(selectedSort.value) {
                case "bubble":
                    checkCount = await bubbleSort(dataArray.value)
                    infoText.value = "Bubble sorted after " + checkCount + " checks (n = " + nrDataPoints.value + ")"
                    break
                case "quick":
                    checkCount = await quicksort(dataArray.value)
                    infoText.value = "Quicksorted after " + checkCount + " checks (n = " + nrDataPoints.value + ")"
                    break
                case "insertion":
                    checkCount = await insertionSort(dataArray.value)
                    infoText.value = "Insertion sorted after " + checkCount + " checks (n = " + nrDataPoints.value + ")"
                    break
                case "merge":
                    break
                default:
            }
            sorting.value = false
        }

        return {
            nrDataPoints,
            dataArray,
            sorting, 
            barColor,
            selectedSort,
            infoText,
            selectSort,
            randomData, 
            sort,
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
.chart {
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 50%;
    min-height: 300px;
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