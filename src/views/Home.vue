<template>
    <div class="page">
        <header class="center">
            <div class="center flex-col">
                <img src="@/assets/img/flex_white.png" alt="FLEX" class="w-32">
                <h1>FLEX</h1>
            </div>
            <p class="text-lg text-center">Descubre Flex, tu nueva app para organizar rutinas y ejercicios, diseñada para brindarte una experiencia completamente personalizada y flexible en tu viaje de fitness.</p>
        </header>
        <div class="buttons center">
            <RouterLink class="button signup" to="/signup">
                Sign-Up
            </RouterLink>
            <RouterLink class="button login" to="/login">
                Log-in
            </RouterLink>
        </div>
        
    </div>
    
    <img class="home" src="@/assets/img/home.jpg" alt="">
    <div class="overlay"></div>
</template>


<script setup>

import { RouterLink} from 'vue-router'

</script>


<style scoped>

.page { @apply gap-16 justify-center items-center p-8 bg-transparent }
.page > * { @apply z-20 }
.home { filter: grayscale(100%); @apply absolute w-full h-full top-0 left-0 bg-right bg-cover }
.overlay { @apply absolute w-full h-full top-0 left-0 bg-black opacity-70 }

header { @apply w-full flex-col gap-16 p-4 }
h1 { @apply text-6xl font-bold }

input { @apply bg-[#424242] rounded-lg p-2 focus:outline-none }
.buttons { @apply w-full gap-2 }
.button { @apply p-2 rounded-lg w-full text-center duration-200 }
.signup { @apply bg-black }
.login { @apply bg-white text-black font-semibold }

</style>