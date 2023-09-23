<template>
  <div class="page">
    <header>
      <h1>Hola, {{ user.username }}</h1>
    </header>

    <section class="data">
      <div class="table">
        <div class="title">
          <h1>Tus datos</h1>
          <font-awesome-icon
            :style="{ color: editData ? user.color : 'white' }"
            icon="fa-pen-to-square"
            @click="editData = !editData"
            alt="eyePassword" />
            <button class="save" v-if="editData" @click="saveData">guardar</button>
        </div>
        <div class="card">
          <div class="row">
            <p>Altura</p>
            <p v-if="!editData"> {{ user.height }} </p>
            <input type="text" :placeholder="height" v-if="editData" v-model="newHeight">
          </div>
          <div class="row">
            <p>Peso</p>
            <p v-if="!editData"> {{ user.weight }} </p>
            <input type="text" :placeholder="weight" v-if="editData" v-model="newWeight">
          </div>
          <div class="row" v-if="height != 0 && weight != 0 ">
            <p>IMC</p>
            <p> {{ imc }} </p>
          </div>
        </div>
      </div>
    </section>


    <section class="config">
      <h1>Configuración</h1>
      <div class="options center">

        <div class="change center" v-if="auth.currentUser.providerData[0].providerId != 'google.com'">
          <p>Cambiar Username</p>
          <input type="username" :placeholder="user.username" name="" id="" v-model="newName" >
          <button class="save" v-if="newName" @click="saveUsername">
            guardar
          </button>
        </div>

        <div class="change center" v-if="auth.currentUser.providerData[0].providerId != 'google.com'">
          <p> Cambiar contraseña </p>
          <div class="password">
            <input placeholder="Contraseña Actual" :type="showPassword ? 'text' : 'password'" v-model="currentPass" >
            <font-awesome-icon 
            class="eye" 
            :icon="showPassword ? 'eye-slash' : 'eye'"
            @click="showPassword = !showPassword"
            alt="eyePassword" />
          </div>
          <div class="password">
            <input placeholder="Nueva Contraseña" :type="showPassword ? 'text' : 'password'" v-model="newPass"  >
          </div>
          
          <button class="save" v-if="currentPass && newPass" @click="savePassword">
            guardar
          </button>
        </div>

        <div class="changeTheme">
          <p>Tema</p>
          <div>
            <input type="color" class="colorSelector" v-model="userColor">
            <p>{{userColor}}</p>
          </div>
          
        </div>

        <div class="change center">
          <p class="self-start">Cuenta</p>
          <div class="buttons center">
            <button class="logout" @click="logOut">cerrar sesión</button>
            <button class="delete" @click="deleteAcc">borrar cuenta</button>
          </div>
        </div>
        

      </div>
    </section>
    
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import { auth, deleteAccount, updateColor, updateUsername, updateHeight, updateWeight } from '@/fb'
import { signOut, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth'
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
  
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    currentPass.value
  )

  reauthenticateWithCredential(auth.currentUser, credential)
  .then(() => {
    console.log('RELOGED')
    updatePassword(auth.currentUser, newPass.value)
    .then(() => {
      console.log('UPDATED')
    })
    .catch((error) => {
      console.log('New Password not valid')
    })
  })
  .catch((error) => {
    console.log('Wrong old password')
  })


}

const logOut = () => {
  signOut(auth)
  location.reload()
}

const deleteAcc = () => { //HAY QUE PEDIRLE DE NUEVO LA CONTRASEÑA. NECESITA UN LOGIN RECIENTE PARA EL DELETE USER
  deleteAccount(auth.currentUser.uid)
  //location.reload()
  console.log('DELETED')
  
}


</script>

<style scoped>

.page { @apply gap-6 p-4 text-sm }
header > h1 { @apply text-4xl font-extrabold }
header > h3 { @apply text-lg }
.data { @apply flex flex-col gap-4 w-full text-lg }

.table {
  @apply flex flex-col;
}
.table .card {
  @apply w-full bg-darkBlack text-white rounded-xl;
}
.table .title {
  @apply flex items-center font-bold text-lg gap-4 h-12
}
.table .row {
  @apply w-full flex justify-between p-2;
}
.table input { @apply bg-gray w-32 rounded-md text-right p-1}

.config { @apply flex w-full text-lg gap-2 flex-col}
.config > h1 { @apply text-xl }
.config .options { @apply w-full flex-col gap-8 p-2 }
.change { @apply w-full flex-col gap-2 }
.change > input { @apply bg-coal p-3 focus:outline-none w-full rounded-md }

.save { @apply font-normal bg-black rounded-lg px-2 py-1 ml-auto }

.changeTheme { @apply w-full flex flex-col gap-2 }
.changeTheme > div { @apply w-full flex gap-4 rounded-md bg-black p-3 }
.colorSelector { @apply w-full rounded-md }
.changeTheme > div > p { @apply w-48 text-center }


.password { @apply text-xl flex items-center w-full gap-2 bg-coal rounded-md pr-3}
.password > input { @apply bg-coal p-3 focus:outline-none w-full rounded-md }
.buttons { @apply w-full flex-col gap-4 text-bone }
.buttons button { @apply w-full p-2 rounded-lg text-base }
.delete, .logout { @apply bg-black text-white }

section h1 { @apply text-lg font-bold }

</style>
