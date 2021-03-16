<template>
    <div class="columns box">
        <div class="column is-one-third">
            <h2 class="title">{{name}}</h2>
            <p>{{blurb}}</p>
        </div>
        <div class="column">
            <figure>
                <img rel=preload :src="`/img/${slug}Preview.gif`"/>
            </figure>
        </div>
    </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    slug: String,
    name: String,
    blurb: String
})
</script>

<style scoped>
h2.title {
    font-size:3rem !important;
    font-weight:800;
    font-family: 'VT323', monospace;
    text-transform: uppercase;
    color:#363636 !important;
}

p {
    font-size: 1.25rem;
    line-height: 2rem;
}

img{
    min-height:300px;
    max-height:300px;
}
</style>
