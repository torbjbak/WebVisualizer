<template>
    <div class="chart">
        <vue3-chart-js
            :id="barChart.id"
            :type="barChart.type"
            :data="barChart.data"
        ></vue3-chart-js>
    </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'BarChart',

  components: {
    Vue3ChartJs,
  },

  props: {
    dataObject: {
      type: Object,
      required: true,
    }
  },

  setup (props) {
    const barChart = {
      id: 'bar',
      type: 'bar',
      data: {
        datasets: [
          {
            data: props.dataObject
          }
        ]
      }
    }

    return {
      barChart
    }
  },
}
</script>

<style scoped>
    .chart {
        max-width: 800px;
    }
</style>