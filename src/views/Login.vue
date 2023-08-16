<template>
    <div class="form full">
        <div class="field">
            <input placeholder="email" type="email" v-model="email">
        </div>
        <div class="field">
            <input placeholder="password" type="password" v-model="password">
        </div>
        <button class="login" @click="login()">login</button>
        <hr>
        <button class="google">
            <p>continue with Google</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" className='w-8'/>
        </button>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { auth } from '@/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

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

.form { @apply flex flex-col gap-6 justify-center items-center p-8 }
.field { @apply flex flex-col w-full gap-2 }
input { @apply bg-[#424242] rounded-lg p-2 focus:outline-none }
button { @apply p-2 rounded-lg w-full }
.login { @apply text-black font-bold bg-orange hover:bg-lightOrange focus:bg-lightOrange duration-200 }
.google { @apply flex justify-center items-center gap-4 }
hr { @apply bg-[#424242] h-[0.12rem] w-full }

</style>