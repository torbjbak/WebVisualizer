<template>
    <div class="square" :style="squareStyling">{{ name }}</div>
</template>

<script>
export default {
    name: 'Square',

    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: Number,
            required: true
        }
    },

    computed: {
        squareStyling() {
            if(this.type == 0)          // Open square 
                return { backgroundColor: "#FAEBD7" }
            else if(this.type == 1)     // Checked square
                return { backgroundColor: "#A9A9A9" }
            else if(this.type == 2)     // Blocked square
                return { backgroundColor: "#BDB76B" }
            else if(this.type == 3)     // Start square
                return { backgroundColor: "#7FFF00" }
            else if(this.type == 4)     // End square
                return { backgroundColor: "#FF8C00" }
            else if(this.type == 5)     // Path square
                return { backgroundColor: "#FEFE22" }
        }
    }
}
</script>

<style scoped>
.square {
    height: 3rem;
    width: 3rem;
    outline: 1px solid black;
    display: table-cell;
    vertical-align: middle;
    font-size: 14px;
}
</style>