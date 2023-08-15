<template>
  <div class="component">
    <h1 class="title">{{ props.title }}</h1>
    <div class="card">
      <div class="row" v-for="item in props.data">
        <h1>{{ item.key }}</h1>
        <h1>{{ item.value }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: "",
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.component {
  @apply flex flex-col gap-2;
}
.card {
  @apply w-full bg-lightOrange text-xl text-black rounded-xl;
}
.title {
  @apply font-bold text-lg;
}
.row {
  @apply w-full flex justify-between p-3;
}
</style>
