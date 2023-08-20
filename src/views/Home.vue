<template>
    <div class="page">
        <header class="center">
            <img src="@/assets/img/flex_white.png" alt="FLEX" class="w-32">
            <h1>FLEX</h1>
            <p>Sculpt your success</p>
        </header>
        <RouterLink class="button signup" to="/signup">
            Sign-Up
        </RouterLink>
        <RouterLink class="button login" to="/login">
            Log-in
        </RouterLink>
    </div>
</template>


<script setup>
import { RouterLink} from 'vue-router'

</script>


<style scoped>

.page { @apply gap-6 justify-center items-center p-8 text-lg bg-coal }

header { @apply w-full flex-col gap-2 p-4 }
header > h1 {@apply text-6xl font-bold}
header > h3 {@apply font-semibold}


.field { @apply flex flex-col w-full gap-2 }
input { @apply bg-[#424242] rounded-lg p-2 focus:outline-none }
.button { @apply p-4 rounded-lg w-full text-center}
.signup { @apply text-black font-bold bg-salmon hover:bg-lightOrange focus:bg-lightOrange duration-200 }
.login { @apply text-black font-bold bg-orange hover:bg-lightOrange focus:bg-lightOrange duration-200 }

</style>