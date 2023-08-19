<template>
  <div class="center exeCard">
    <h3 class="text-xl self-start">{{ props.name }}</h3>

    <div class="props">
      <div class="prop-cont">
        <p>Series</p>
        <p>{{ props.series }}</p>
      </div>
      <div class="prop-cont">
        <p>Reps</p>
        <p>{{ props.reps }}</p>
      </div>
      <div class="prop-cont">
        <p>Type</p>
        <p>Power</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  name: "Exercise",
  series: 0,
  reps: "0",
});
</script>

<style scoped>
.exeCard { @apply flex-col gap-2 w-full border-l-4 border-[#aeaeae] rounded-r-lg bg-darkBlack p-4 }
.props { @apply w-full flex justify-between items-center }
.prop-cont { @apply flex items-center justify-center gap-4 }
.prop-cont > *:nth-child(1) { @apply font-extralight }

</style>
