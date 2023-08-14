<template>
  <div class="page">
    <header>
      <h1>Hi, user</h1>
      <h3>You will achive your goals</h3>
    </header>

    <TableData :data="currentData" :title="'Current Data'" />
    <TableData :data="objective" :title="'Objectives'" />
  </div>
</template>

<script setup>
import TableData from "../components/TableData.vue";

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

.page{@apply p-5}

header > h1 {
  @apply text-4xl font-extrabold;
}
header > h3 {
  @apply text-lg;
}
</style>
