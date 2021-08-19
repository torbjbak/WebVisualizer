<template>
    <div class="box" :style="barSize"></div>
    {{ name }}{{ value }}
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
        }
    },

    computed: {
        barSize() {
            return {
                height: `${this.value*4.5}%`,
                width: `${this.barWidth}px`
            }
        },
        barWidth() {
            if(this.barNr > 10) {
                return 10 + (400 / this.barNr)
            }
            return 50
        }
    }
}
</script>

<style scoped>
.box {
    background-color: coral;
    padding: 5px;
}
</style>