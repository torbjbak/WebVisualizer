<template>
    <div class="pixel" :style="pixelStyling"></div>
</template>

<script>
export default {
    name: 'Pixel',

    props: {
        alive: {
            type: Boolean,
            required: true
        }
    },

    computed: {
        pixelStyling() {
            if(!this.alive) // Dead
                return { backgroundColor: "#e9ffdb" }
            else            // Alive
                return { backgroundColor: "#32cd32" }
        }
    }
}
</script>

<style scoped>
.pixel {
    height: 0.5rem;
    width: 0.5rem;
    display: table-cell;
    vertical-align: middle;
}
</style>