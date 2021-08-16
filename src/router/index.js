import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Sorting from "@/views/Sorting.vue"


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/sorting",
        name: "Sorting",
        component: Sorting,
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