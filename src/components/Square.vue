<template>
    <div class="square" :style="squareStyling"></div>
</template>

<script>
export default {
    name: 'Square',

    props: {
        squareColor: {
            type: String,
            required: true,
        }
    },

    computed: {
        squareStyling() {
            return {
                backgroundColor: `${this.squareColor}`
            }
        }
    }
}
</script>

<style scoped>
.square {
    height: 25px;
    width: 25px;
}
</style>