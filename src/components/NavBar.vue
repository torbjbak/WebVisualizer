<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" @click="routeTo('/helloworld')">HelloWorld</a>

                <a class="navbar-item">Project</a>
            </div>
        </div>
    </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
    name: 'NavBar',

    setup() {
        const router = useRouter()

        const currentPath = computed(() => {
            return router.currentRoute.value.path;
        })

        const routeTo = (path) => {
            router.push({ path: path })
        }

        return {
            currentPath,
            routeTo
        }
    }
}
</script>