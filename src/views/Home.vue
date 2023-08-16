<template>
    <div class="page">
        <header class="center">
            <h1>F<span class="text-orange">L</span>E<span class="text-orange">X</span></h1>
            <h3>Sculpt Your Success</h3>
        </header>
        <RouterLink class="button signup" to="/signup">
            Sign-Up
        </RouterLink>
        <RouterLink class="button login" to="/login">
            Log-in
        </RouterLink>
        <hr>
        <button class="google">
            <p>continue with Google</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" className='w-8'/>
        </button>
    </div>
</template>


<script setup>
import { RouterLink} from 'vue-router'

</script>


<style scoped>
.page { @apply  gap-6 justify-center items-center p-8 text-lg}

header{@apply w-full flex-col gap-2 p-4}
header > h1 {@apply text-6xl font-bold}
header > h3 {@apply font-semibold}


.field { @apply flex flex-col w-full gap-2 }
input { @apply bg-[#424242] rounded-lg p-2 focus:outline-none }
.button { @apply p-4 rounded-lg w-full text-center}
.signup { @apply text-black font-bold bg-salmon hover:bg-lightOrange focus:bg-lightOrange duration-200 }
.login { @apply text-black font-bold bg-orange hover:bg-lightOrange focus:bg-lightOrange duration-200 }
.google { @apply flex justify-center items-center gap-4 }
hr { @apply bg-[#424242] h-[0.12rem] w-full }

</style>