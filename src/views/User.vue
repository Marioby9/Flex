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
        <div class="correo center">
          <p>Change Email</p>
          <input type="email" placeholder="" name="" id="">
        </div>
        <div class="buttons center">
          <button @click="deleteAcc">Delete Account</button>
          <button>Delete Account</button>
        </div>

      </div>
    </section>

    <div class="logout center">
      <button @click="logOut">logout</button>
    </div>
    
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import TableData from "../components/TableData.vue";
import { auth, deleteAccount } from '@/firebase.js'
import { signOut } from 'firebase/auth'
import { useUserStore } from '../stores/user.js';

const user = useUserStore();

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
];

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
];


const logOut = () => {
  signOut(auth);
  user.logout();
}

const deleteAcc = () => {
  try {
    deleteAccount(auth.currentUser.uid);

  } catch (error) {
    console.log('Error al eliminar cuenta', error);
  }
  finally{
    router.push( { path: '/' } )
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

.config { @apply w-full text-xl gap-4 flex-col}
.config .options { @apply w-full flex-col gap-4}
.correo { @apply w-full flex-col }
.buttons { @apply flex-col gap-2 text-bone }
</style>
