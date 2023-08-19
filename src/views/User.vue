<template>
  <div class="page">
    <header>
      <h1>Hi, {{ user.username }}</h1>
      <h3>You will achive your goals</h3>
    </header>

    <div class="data">
      <TableData :data="currentData" :title="'Current Data'" />
      <TableData :data="objective" :title="'Objectives'" />
    </div>
    <div class="logout center">
      <button @click="logOut">logout</button>
    </div>
    
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import TableData from "../components/TableData.vue";
import { auth } from '@/firebase'
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


</script>

<style scoped>

.page { @apply gap-4 }
header{@apply p-4}
header > h1 { @apply text-4xl font-extrabold }
header > h3 { @apply text-lg }
.data { @apply flex flex-col gap-4 p-4 }
.logout { @apply p-4 }
.logout > button { @apply bg-darkBlack w-32 h-12 }

</style>
