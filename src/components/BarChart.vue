<template>
    <div class="chart">
        <label>{{ label }}
            <vue3-chart-js
                :id="barChart.id"
                :type="barChart.type"
                :data="barChart.data"
                :options="barChart.options"
            ></vue3-chart-js>
        </label>
    </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'BarChart',

  components: {
    Vue3ChartJs
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    xAxis: {
      type: String,
      required: true,
    }
  },

  setup (props) {
    const barChart = {
        id: "bar",
        type: "bar",
        data: {
            labels: props.data.labels,
            datasets: [
                {
                    backgroundColor: props.color,
                    data: props.data.value,
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    ticks: {
                        precision: 0,
                    },
                    title: {
                        display: true,
                        text: "Reservations"
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: props.xAxis
                    },
                }
            }
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