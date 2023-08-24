<template>
  <div class="page">
    <header>
      <h1>Hi, {{ user.username }}</h1>
      <h3>You will achive your goals</h3>
    </header>

    <section class="data">
      <div class="table">
        <div class="title">
          <h1>Current Data</h1>
          <font-awesome-icon
            :class="editData ? 'text-orange' : 'text-white'" 
            icon="fa-pen-to-square"
            @click="editData = !editData"
            alt="eyePassword" />
        </div>
        <div class="card">
          <div class="row">
            <p>Height</p>
            <p v-if="!editData"> {{ user.height }} </p>
            <input type="text" :placeholder="height" v-if="editData" v-model="newHeight">
          </div>
          <div class="row">
            <p>Weight</p>
            <p v-if="!editData"> {{ user.weight }} </p>
            <input type="text" :placeholder="weight" v-if="editData" v-model="newWeight">
          </div>
          <div class="row" v-if="height != 0 && weight != 0 ">
            <p>IMC</p>
            <p> {{ imc }} </p>
          </div>
        </div>
      </div>

      <button class="save" v-if="editData" @click="saveData">
          save
      </button>
    </section>


    <section class="config">
      <h1>Configuration</h1>
      <div class="options center">

        <div class="change center" v-if="auth.currentUser.providerData[0].providerId != 'google.com'">
          <p>Change Username</p>
          <input type="username" :placeholder="user.username" name="" id="" v-model="newName" >
          <button class="save" v-if="newName" @click="saveUsername">
            save
          </button>
        </div>

        <div class="change center" v-if="auth.currentUser.providerData[0].providerId != 'google.com'">
          <p> Change Password </p>
          <div class="password">
            <input placeholder="Current Password" :type="showPassword ? 'text' : 'password'" v-model="currentPass" >
            <font-awesome-icon 
            class="eye" 
            :icon="showPassword ? 'eye-slash' : 'eye'"
            @click="showPassword = !showPassword"
            alt="eyePassword" />
          </div>
          <div class="password">
            <input placeholder="New Password" :type="showPassword ? 'text' : 'password'" v-model="newPass"  >
          </div>
          
          <button class="save" v-if="currentPass && newPass">
            save
          </button>
        </div>

        <div class="changeTheme center">
          <p>Theme</p>
          <div>
            <input type="color" class="colorSelector" v-model="userColor">
            <p>{{userColor}}</p>
          </div>
          
        </div>

        <div class="buttons center">
          <button @click="logOut">logout</button>
          <button class="deleteAcc" @click="deleteAcc">Delete Account</button>
        </div>

      </div>
    </section>
    
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import { auth, deleteAccount, updateColor, updateUsername, updateHeight, updateWeight } from '@/firebase.js'
import { signOut, deleteUser } from 'firebase/auth'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

//

const user = useUserStore()

const router = useRouter()

//

const userColor = ref(user.color)

//

const editData = ref(false)
const height = ref(user.height)
const weight = ref(user.weight)
const newHeight = ref()
const newWeight = ref()
const imc = ref(Math.round(weight.value/Math.pow((height.value/100) , 2)))

//

const saveData = () => {
  if(!isNaN(newHeight.value)){
    updateHeight(auth.currentUser.uid, newHeight.value)
    height.value = newHeight.value
    editData.value = false
  
  }
  if(!isNaN(newWeight.value)){
    updateWeight(auth.currentUser.uid, newWeight.value)
    weight.value = newWeight.value
    editData.value = false
  }
  imc.value = Math.round(weight.value/Math.pow((height.value/100) , 2))
  
  
  
}


//CONFIGURATION REFS
const showPassword = ref(false)
const newName = ref('')
const currentPass = ref('')
const newPass = ref('')


watch(userColor, (newColor) => {
  user.color = newColor
  updateColor(auth.currentUser.uid, newColor);
})

const saveUsername = () => {
  user.username = newName.value
  updateUsername(auth.currentUser.uid, newName.value)
  newName.value = ''
}

const savePassword = () => {
  
}

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
.data { @apply flex flex-col gap-4 w-full text-xl }

.table {
  @apply flex flex-col gap-2;
}
.table .card {
  @apply w-full bg-darkBlack text-white rounded-xl;
}
.table .title {
  @apply flex items-center font-bold text-lg gap-4
}
.table .row {
  @apply w-full flex justify-between p-3;
}
.table input { @apply bg-gray w-32 rounded-md text-right p-1}

.config { @apply flex w-full text-xl gap-4 flex-col}
.config > h1 { @apply text-xl }
.config .options { @apply w-full flex-col gap-8}
.change { @apply w-full flex-col gap-2 }
.change > input { @apply bg-coal p-3 focus:outline-none w-full rounded-md }

.save { @apply text-bone bg-black rounded-lg p-2 w-20 self-center}

.changeTheme { @apply  flex-col gap-2 }
.changeTheme > div { @apply w-full flex gap-4 rounded-md bg-coal p-3 }
.colorSelector { @apply w-full rounded-md}
.changeTheme > div > p { @apply w-48 text-center }


.password { @apply text-xl flex items-center w-full gap-2 bg-coal rounded-md pr-3}
.password > input { @apply bg-coal p-3 focus:outline-none w-full rounded-md }
.buttons { @apply flex-col gap-3 text-bone }
.deleteAcc { @apply p-2 bg-red bg-opacity-50 rounded-lg }
</style>
