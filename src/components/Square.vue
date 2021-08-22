<template>
    <div class="square" :style="squareStyling">{{ colorCode }}</div>
</template>

<script>
export default {
    name: 'Square',

    props: {
        colorCode: {
            type: Number,
            required: true,
        }
    },

    computed: {
        squareStyling() {
            if(this.colorCode == 0) {
                return { backgroundColor: "#FAEBD7" }
            } else if(this.colorCode == 1) {
                return { backgroundColor: "#8B0000" }
            } else {
                return { backgroundColor: "#FF1493" }
            }
        }
    }
}
</script>

<style scoped>
.square {
    height: 2rem;
    width: 2rem;
    outline: 1px solid black;
}
</style>