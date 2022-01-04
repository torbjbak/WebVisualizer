<template>
    <div class="card">
         <div class="card-image">
            <figure class="image is-128x128">
                <img src='@/assets/portrait.jpg'>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">Torbjørn Bakke</p>
                    
                    <p class="subtitle is-6">
                        <font-awesome-icon icon="at" />
                        tbakke93@gmail.com
                    </p>
                    <p class="subtitle is-6">
                        <font-awesome-icon icon="phone" />
                        +47 413 33 588
                    </p>
                    <p class="subtitle is-6">
                        <font-awesome-icon :icon="['fab', 'github']" />
                        <a href="https://github.com/torbjbak"> github.com/torbjbak</a>
                    </p>
                    <p class="subtitle is-6">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                        <a href="https://www.linkedin.com/in/tbakke93"> linkedin.com/in/tbakke93</a>
                    </p>
                </div>
            </div>

            <div class="content">
                Hello, my name is Torbjørn, I am a computer engineering student at NTNU Trondheim. 
                I will finish my Bachelor's degree in system development in the spring of 2022.
                <br>
                This page is a hobby project page used to host web apps I've been working on in my spare time. 
                For now, there are some simple visualizations of various algorithms.
                <br>
                (The visualization pages have not yet been formatted for mobile/small screens)
                <br><br>
                Repository for this page and its content: 
                <a href="https://github.com/torbjbak/WebVisualizer"> github.com/torbjbak/WebVisualizer</a>
                <br><br>
                <time>Last updated: 4. Jan 2021</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.subtitle {
    margin: 0;
}
.content {
    text-align: start;
}
.image {
    margin: auto;
}
</style>
