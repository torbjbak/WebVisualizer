<template>
    <section class="container">
        <div class="buttons">
            <button 
                class="button is-rounded is-info"
                >Button
            </button>

        </div>

        <div class="field has-addons">
            <div class="control">
                <input 
                    id="nrDataPoints" 
                    class="input is-rounded" 
                    type="number" 
                    max=20 
                    min=2 
                    v-model="n" 
                    placeholder="n">
            </div>
            <div class="control">
                <input 
                    id="nrDataPoints" 
                    class="input is-rounded" 
                    type="number" 
                    max=20 
                    min=2 
                    v-model="m" 
                    placeholder="m">
            </div>
            <div class="control">
                <a class="button is-rounded is-link" @click="initGrid()">Fill grid</a>
            </div>
            <div class="control">
                <div class="select is-rounded is-link">
                    <select v-model="gridClick">
                        <option value='block'>Block squares</option>
                        <option value='start'>Set start square</option>
                        <option value='end'>Set end square</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <a class="button is-rounded is-dark" @click="findPath()">Find paths</a>
            </div>
        </div>

        <div class="grid container">
            <div class="row" v-for="row in matrix" :key="row">
                <div class="square" v-for="square in row" :key="square.coor">
                    <Square
                        :name="getSquareName(square)"
                        :type="square.type"
                        @click="clickSquare(square)"
                    />
                </div>
            </div>
        </div>
        
        <div class="box">
            {{ infoText }}
        </div>
    </section>
</template>

<script>
import Square from '@/components/Square.vue'
import { ref } from 'vue'
import { dijkstra } from '@/algorithms/Dijkstra.js'
import { SquareClass } from '@/utils/SquareClass.js'

export default {
    name: 'GridPaths',

    components: {
        Square
    },

    setup() {
        const n = ref()
        const m = ref()
        const infoText = ref("Fill in the number of rows (n) and columns (m), values 2-20")
        const matrix = ref([])
        const path = ref([])
        const start = ref({
            x: 0,
            y: 0
        })
        const end = ref({
            x: 0,
            y: 0
        })
        const gridClick = ref("block")

        const initGrid = function() {
            infoText.value = ""

            matrix.value = new Array()
            for(let i = 0; i < n.value; i++) {
                matrix.value.push([])
                for(let j = 0; j < m.value; j++) {
                    if(i == 0 && j == 0) {
                        matrix.value[i].push(new SquareClass(i, j, 3))
                    } else if(i == n.value - 1 && j == m.value - 1) {
                        matrix.value[i].push(new SquareClass(i, j, 4))
                        end.value.x = i
                        end.value.y = j
                    } else {
                        matrix.value[i].push(new SquareClass(i, j, 0))
                    }
                }
            }
        }

        const clickSquare = function(square) {
            console.log("x:", square.x, "y:", square.y)
            console.log("start: ", start.value.x, start.value.y)
            console.log("end: ", end.value.x, end.value.y)
            if(gridClick.value == "block") {
                if(square.type == 0) 
                    square.type = 2
                else if(square.type == 2) 
                    square.type = 0
            } else if(gridClick.value == "start") {
                if(square.type == 4) {
                    matrix.value[start.value.x][start.value.y].type = 4
                    end.value.x = start.value.x
                    end.value.y = start.value.y
                    start.value.x = square.x
                    start.value.y = square.y
                    square.type = 3
                } else {
                    matrix.value[start.value.x][start.value.y].type = 0
                    start.value.x = square.x
                    start.value.y = square.y
                    square.type = 3
                }
            } else if(gridClick.value == "end") {
                if(square.type == 3) {
                    matrix.value[end.value.x][end.value.y].type = 3
                    start.value.x = end.value.x
                    start.value.y = end.value.y
                    end.value.x = square.x
                    end.value.y = square.y
                    square.type = 4
                } else {
                    matrix.value[end.value.x][end.value.y].type = 0
                    end.value.x = square.x
                    end.value.y = square.y
                    square.type = 4
                }
            }
        }

        const findPath = async() => {
            const path = await dijkstra(matrix.value, start.value.x, start.value.y)
            if(path.length == 0)
                infoText.value = "No valid path found!"
            else {
                showPath(path)
                infoText.value = "Found path with length " + path.length
            }
            start.value.x = 0
            start.value.y = 0
        }

        const showPath = function(path) {
            for(let i = 0; i < path.length; i++) {
                matrix.value[path[i].x][path[i].y].type = 5
            }
        }

        const getSquareName = function(square) {
            if(square.type == 2)
                return "X"
            if(square.type == 3)
                return "Start"
            if(square.type == 4)
                return "End"
            return "(" + square.x + "," + square.y + ")" 
        }

        return {
            n,
            m,
            infoText,
            matrix,
            Square,
            path,
            gridClick,
            start,
            end,
            initGrid,
            clickSquare,
            findPath,
            getSquareName
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
.grid {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.row {
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
}
.square {
    padding: 0;
}
.control {
    width: fit-content;
}
#nrDataPoints {
    width: 6rem;
}
</style>