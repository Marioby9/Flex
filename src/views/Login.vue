<template>
    <div class="page">

        <header class="center">
            <h1>¡Welcome!</h1>
            <h3>Login to start using Flex</h3>
        </header>
        <div class="field">
            <input placeholder="email" type="email" v-model="email">
        </div>
        <div class="field">
            <input placeholder="password" type="password" v-model="password">
        </div>
        <button class="login" @click="login()">LogIn</button>
        <hr>
        <button class="google">
            <p>continue with Google</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" className='w-8'/>
        </button>
        <RouterLink to="/">
            <p>back</p>
        </RouterLink>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { auth } from '@/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { RouterLink , useRouter } from 'vue-router'

//

const router = useRouter()

//

const email = ref('')
const password = ref('')

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(credentials => {
        router.push({ path: '/workouts' })
    })
    .catch(error => console.log(error))
}

</script>


<style scoped>
.page { @apply  gap-6 justify-center items-center p-8}

header{@apply w-full flex-col p-4 gap-2}
header > h1 {@apply text-4xl font-bold}

.field { @apply flex flex-col w-full gap-2 }
input { @apply bg-[#424242] rounded-lg p-2 focus:outline-none }
button { @apply p-2 rounded-lg w-full }
.login { @apply text-black font-bold bg-orange hover:bg-lightOrange focus:bg-lightOrange duration-200 }
.google { @apply flex justify-center items-center gap-4 }
hr { @apply bg-[#424242] h-[0.12rem] w-full }

</style>