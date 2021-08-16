<template>
    <section class="container">
        <div class="buttons">
            <button class="button is-primary">Insertion sort</button>
            <button class="button is-primary">Quicksort</button>
        </div>

        <div class="chart">
            <bar-chart :chart-data="datacollection"></bar-chart>
            <button class="button is-link" @click="fillData()">Randomize</button>
        </div>
    </section>
</template>

<script>
import BarChart from '@/assets/BarChart.js'

export default {
    components: {
        BarChart
    },

    mounted () {
        this.fillData()
    },

    methods: {
        fillData () {
            this.datacollection = {
            labels: [this.getRandomInt(), this.getRandomInt()],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }, 
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }
            ]
            }
        },

        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
</script>

<style>
.buttons {
    justify-content: center;
}
</style>