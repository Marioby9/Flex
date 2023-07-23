<template>
        <nav class="menu">
            <RouterLink v-for="elm in menu" :to="elm.path">
                <abbr :title="elm.name"><img :src="elm.img" alt="elm.name"></abbr>
            </RouterLink>
        </nav>
    
</template>

<script setup>
    import { RouterLink } from 'vue-router';

    const menu = [
        {path: '/plans', name: 'Plan', img: 'src/assets/img/plan.png'},
        {path: '/stats', name: 'Stats', img: 'src/assets/img/stats.png'},
        {path: '/me', name: 'Me', img: 'src/assets/img/me.png'}
    ]

</script>

<style scoped>
    .menu {@apply h-16 w-full flex items-center justify-around}
    .menu a{@apply w-12 h-12 p-1}
    abbr{@apply w-full h-full block}
    
    
</style>