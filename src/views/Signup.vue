<template>
    <div class="page">

        <header class="center">
            <h1>¡Bienvenido!</h1>
            <h3>Regístrate para crear una cuenta</h3>
        </header>
        <div class="field">
            <input placeholder="username" type="username" v-model="username">
        </div>
        <div class="field">
            <input placeholder="email" type="email" v-model="email">
        </div>
        <div class="field">
            <input placeholder="contraseña" :type="showPassword ? 'text' : 'password'" v-model="password">
            <font-awesome-icon 
            class="eye" 
            :icon="showPassword ? 'eye-slash' : 'eye'"
            @click="showPassword = !showPassword"
            alt="eyePassword" />
        </div>
        <div class="field">
            <input placeholder="confirmar contraseña" :type="showPassword ? 'text' : 'password'" v-model="confPassword">
        </div>
        <button class="login" @click="signup()">SignUp</button>
        <hr>
        <h3 v-if="isError">Vaya, ha ocurrido un error...</h3>
        <button class="google" @click="google()">
            <p>continuar con Google</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" className='w-8'/>
        </button>
        <RouterLink class="mt-12" to="/">
            <p>&lt; volver</p>
        </RouterLink>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import { auth, addUserConfig, getUserConfig } from '@/fb';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { RouterLink , useRouter } from 'vue-router';
import { useUserStore } from '../stores/user.js';

//

const router = useRouter();

const user = useUserStore();

//

const username = ref('');
const email = ref('');
const password = ref('');
const confPassword = ref('');
const showPassword = ref(false);
const isError = ref(false);

const signup = () => {
    if(password.value == confPassword.value){
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(credentials => {
            addUserConfig(auth.currentUser.uid, {
                username: username.value,
                color: user.color,
                height: 0,
                weight: 0
            });
            user.username.value = username.value; 
            router.push({ path: '/workouts' })
        })
        .catch(error => {
            isError.value = true;
        })
    }
    else{
        isError.value = true;
        password.value = '';
        confPassword.value = '';
    }
}

const google = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
    .then(credentials => {
        getUserConfig(auth.currentUser.uid, doc => {
            if(!doc.data()) {
                console.log('does not exists')
                addUserConfig(auth.currentUser.uid, {
                    username: auth.currentUser.displayName,
                    color: user.color,
                    height: 0,
                    weight: 0
                })
            }
        })
        user.username = auth.currentUser.displayName;
    })
    .catch(error => {
        isError.value = true;
    })
}

</script>


<style scoped>
.page { @apply gap-5 justify-center items-center p-8 bg-coal}

header{@apply w-full flex-col p-4 gap-2}
header > h1 {@apply text-4xl font-bold}

.field { @apply flex items-center w-full gap-2 bg-gray rounded-lg p-1}
input { @apply bg-gray p-2 focus:outline-none w-full }
.eye{@apply text-lg p-2}
button { @apply p-2 rounded-lg w-full }
.login { @apply text-black font-bold bg-white duration-200 }
.google { @apply flex justify-center items-center gap-4 }
hr { @apply bg-[#424242] h-[0.12rem] w-full }

</style>