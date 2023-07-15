<template>
    <div class="container" >
        <nav class="menu">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/plans">MY PLANS</RouterLink>
            <RouterLink to="/explore">EXPLORE</RouterLink>
            <RouterLink to="/stats">MY STATS</RouterLink>
            <RouterLink to="/me">ME</RouterLink>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    
</script>

<style scoped>
    .container{@apply w-full flex items-center justify-center}
    .menu {@apply h-28 w-3/6 p-11 flex items-center justify-between text-white}
    .menu a{@apply hover:text-orange focus:text-orange focus:underline duration-300}
    
</style>