<template>
  <div class="page">
    <header>
      <h1>Hi, {{ user.username }}</h1>
      <h3>You will achive your goals</h3>
    </header>

    <section class="data">
      <TableData :data="currentData" :title="'Current Data'" />
      <TableData :data="objective" :title="'Objectives'" />
    </section>


    <section class="config">
      <h1>Configuration</h1>
      <div class="options center">
        <div class="changeName center">
          <p>Change Username</p>
          <input type="email" :placeholder="user.username" name="" id=""> 
        </div>
        <div class="changeTheme center">
          <p>Change Theme</p>
          <input type="color" v-model="userColor">
        </div>
        <div class="buttons center">
          <button @click="deleteAcc">Delete Account</button>
        </div>

      </div>
    </section>

    <div class="logout center">
      <button @click="logOut">logout</button>
    </div>
    
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import Header from '../components/Header.vue'
import TableData from "../components/TableData.vue"
import { auth, deleteAccount } from '@/firebase.js'
import { signOut } from 'firebase/auth'
import { useUserStore } from '../stores/user.js'
import { useRouter } from 'vue-router'

//

const user = useUserStore()

const router = useRouter()

//

const userColor = ref(user.color)

watch(userColor, (newColor) => {
  user.color = newColor
})

const currentData = [
  {
    key: "Height",
    value: "178",
  },
  {
    key: "Weight",
    value: "88",
  },
  {
    key: "IMC",
    value: "28.1",
  },
]

const objective = [
  {
    key: "Height",
    value: "178",
  },
  {
    key: "Weight",
    value: "95",
  },
  {
    key: "IMC",
    value: "30",
  },
]


const logOut = () => {
  signOut(auth)
}

const deleteAcc = () => {
  try {
    deleteAccount(auth.currentUser.uid)

  } catch (error) {
    console.log('Error al eliminar cuenta', error)
  } finally {
    router.push({ path: '/' })
  }
}


</script>

<style scoped>

.page { @apply gap-8 p-4}
header > h1 { @apply text-4xl font-extrabold }
header > h3 { @apply text-lg }
.data { @apply flex flex-col gap-4 }
.logout { @apply p-4 }
.logout > button { @apply bg-darkBlack w-32 h-12 }

.config { @apply flex w-full text-xl gap-4 flex-col}
.config .options { @apply w-full flex-col gap-6}
.changeName { @apply w-full flex-col gap-2 }
.changeName > input { @apply bg-coal p-2 focus:outline-none w-full rounded-md text-center}
.changeTheme { @apply w-full flex-col gap-2 }
.changeTheme > input { @apply w-40 h-10 rounded-lg }
.buttons { @apply flex-col gap-2 text-bone }
</style>
