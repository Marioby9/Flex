<template>
  <div class="page">
    <Header :title="'MY PROFILE'"/>
    <header>
      <h1>Hi, {{ name }}</h1>
      <h3>You will achive your goals</h3>
    </header>

    <div class="data">
      <TableData :data="currentData" :title="'Current Data'" />
      <TableData :data="objective" :title="'Objectives'" />
    </div>
    <button @click="signOut(auth)">logout</button>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import TableData from "../components/TableData.vue";
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'

const split = auth.currentUser.email.split('@');
const name = split[0];

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
</script>

<style scoped>

header{@apply p-4}
header > h1 {
  @apply text-4xl font-extrabold;
}
header > h3 {
  @apply text-lg;
}
.data{@apply flex flex-col gap-4 p-4}
</style>
