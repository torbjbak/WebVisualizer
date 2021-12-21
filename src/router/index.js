import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Sorting from "@/views/Sorting.vue"
import GridPaths from "@/views/GridPaths.vue"
import GameOfLife from "@/views/GameOfLife.vue"
import Compression from "@/views/Compression.vue"


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/sorting",
        name: "Sorting",
        component: Sorting
    },
    {
        path: "/gridpaths",
        name: "GridPaths",
        component: GridPaths
    },
    {
        path: "/gameoflife",
        name: "GameOfLife",
        component: GameOfLife
    },
    {
        path: "/compression",
        name: "Compression",
        component: Compression
    },
    {
        path: "/",
        redirect: { name: "Home" }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router