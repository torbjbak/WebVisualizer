import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
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