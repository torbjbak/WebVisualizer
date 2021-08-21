<template>
    <div class="box" :style="barStyling"></div>
    <div v-if="barNr<27">
        {{ name }}
    </div>
</template>

<script>
export default {
    name: 'Bar',

    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        barNr: {
            type: Number,
            required: true,
        },
        barColor: {
            type: String,
            required: true,
        }
    },

    computed: {
        barStyling() {
            return {
                height: `${this.value*4.5}%`,
                width: `${this.barWidth}px`,
                backgroundColor: `${this.barColor}`
            }
        },
        barWidth() {
            if(this.barNr > 10) {
                return 5 + (400 / this.barNr)
            }
            return 50
        }
    }
}
</script>

<style scoped>
.box {
    padding: 0px;
    margin-bottom: 0.5rem;
}
</style>